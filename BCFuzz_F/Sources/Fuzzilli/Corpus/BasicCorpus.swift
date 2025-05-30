// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Foundation

/// Corpus for mutation-based fuzzing.
///
/// The corpus contains FuzzIL programs that can be used as input for mutations.
/// Any newly found interesting program is added to the corpus.
/// Programs are evicted from the copus for two reasons:
///
///  - if the corpus grows too large (larger than maxCorpusSize), in which
///    case the oldest programs are removed.
///  - if a program has been mutated often enough (at least
///    minMutationsPerSample times).
///
/// However, once reached, the corpus will never shrink below minCorpusSize again.
/// Further, once initialized, the corpus is guaranteed to always contain at least one program.
public class BasicCorpus: ComponentBase, Collection, Corpus {
    /// The minimum number of samples that should be kept in the corpus.
    private let minSize: Int

    /// The minimum number of times that a sample from the corpus was used
    /// for mutation before it can be discarded from the active set.
    private let minMutationsPerSample: Int

    /// The current set of interesting programs used for mutations.
    private var programs: RingBuffer<Program>
    private var ages: RingBuffer<Int>

    private var ir_programs: RingBuffer<Program>

    /// Counts the total number of entries in the corpus.
    private var totalEntryCounter = 0

    private var IR_list: [String] = ["JSConstant", "DoubleConstant", "Int52Constant", "LazyJSConstant", "Identity", "IdentityWithProfile", "ToThis", "CreateThis", "CreatePromise", "CreateGenerator", "CreateAsyncGenerator", "GetCallee", "SetCallee", "GetArgumentCountIncludingThis", "SetArgumentCountIncludingThis", "GetLocal", "SetLocal", "PutStack", "KillStack", "GetStack", "MovHint", "ZombieHint", "ExitOK", "Phantom", "Check", "CheckVarargs", "Upsilon", "Phi", "Flush", "PhantomLocal", "ExtractFromTuple", "LoopHint", "ExtractOSREntryLocal", "ExtractCatchLocal", "ClearCatchLocals", "CheckTierUpInLoop", "CheckTierUpAndOSREnter", "CheckTierUpAtReturn", "SetArgumentDefinitely", "SetArgumentMaybe", "InvalidationPoint", "ValueBitNot", "ArithBitNot", "ValueBitAnd", "ArithBitAnd", "ValueBitOr", "ArithBitOr", "ValueBitXor", "ArithBitXor", "ArithBitLShift", "ValueBitLShift", "ArithBitRShift", "ValueBitRShift", "BitURShift", "ValueToInt32", "UInt32ToNumber", "BooleanToNumber", "DoubleAsInt32", "DoubleRep", "Int52Rep", "ValueRep", "FiatInt52", "ArithAdd", "ArithClz32", "ArithSub", "ArithNegate", "ArithMul", "ArithIMul", "ArithDiv", "ArithMod", "ArithAbs", "ArithMin", "ArithMax", "ArithFRound", "ArithF16Round", "ArithPow", "ArithRandom", "ArithRound", "ArithFloor", "ArithCeil", "ArithTrunc", "ArithSqrt", "ArithUnary", "Inc", "Dec", "ValueNegate", "ValueAdd", "ValueSub", "ValueMul", "ValueDiv", "ValuePow", "ValueMod", "StrCat", "GetByVal", "GetByValMegamorphic", "GetByValWithThis", "GetByValWithThisMegamorphic", "GetMyArgumentByVal", "GetMyArgumentByValOutOfBounds", "VarargsLength", "LoadVarargs", "ForwardVarargs", "PutByValDirect", "PutByVal", "PutByValAlias", "PutByValMegamorphic", "PutPrivateName", "PutPrivateNameById", "CheckPrivateBrand", "SetPrivateBrand", "TryGetById", "GetById", "GetByIdFlush", "GetByIdWithThis", "GetByIdWithThisMegamorphic", "GetByIdDirect", "GetByIdDirectFlush", "GetByIdMegamorphic", "PutById", "PutByIdFlush", "PutByIdDirect", "PutByIdWithThis", "PutByIdMegamorphic", "PutByValWithThis", "PutGetterById", "PutSetterById", "PutGetterSetterById", "PutGetterByVal", "PutSetterByVal", "DefineDataProperty", "DefineAccessorProperty", "DeleteById", "DeleteByVal", "CheckStructure", "CheckStructureOrEmpty", "GetExecutable", "PutStructure", "AllocatePropertyStorage", "ReallocatePropertyStorage", "GetButterfly", "NukeStructureAndSetButterfly", "CheckArray", "CheckArrayOrEmpty", "GetPrivateName", "GetPrivateNameById", "CheckDetached", "Arrayify", "ArrayifyToStructure", "GetIndexedPropertyStorage", "ResolveRope", "ConstantStoragePointer", "GetGetter", "GetSetter", "GetByOffset", "GetGetterSetterByOffset", "MultiGetByOffset", "PutByOffset", "MultiPutByOffset", "MultiDeleteByOffset", "GetArrayLength", "GetUndetachedTypeArrayLength", "GetTypedArrayLengthAsInt52", "GetVectorLength", "GetTypedArrayByteOffset", "GetTypedArrayByteOffsetAsInt52", "GetWebAssemblyInstanceExports", "GetScope", "SkipScope", "ResolveScope", "ResolveScopeForHoistingFuncDeclInEval", "GetGlobalObject", "GetGlobalThis", "UnwrapGlobalProxy", "GetClosureVar", "PutClosureVar", "GetGlobalVar", "GetGlobalLexicalVariable", "PutGlobalVariable", "GetDynamicVar", "PutDynamicVar", "NotifyWrite", "GetRegExpObjectLastIndex", "SetRegExpObjectLastIndex", "RecordRegExpCachedResult", "CheckIsConstant", "CheckNotEmpty", "AssertNotEmpty", "CheckBadValue", "AssertInBounds", "CheckInBounds", "CheckInBoundsInt52", "CheckIdent", "CheckTypeInfoFlags", "CheckJSCast", "CheckNotJSCast", "ParseInt", "GetPrototypeOf", "ObjectAssign", "ObjectCreate", "ObjectKeys", "ObjectGetOwnPropertyNames", "ObjectGetOwnPropertySymbols", "ObjectToString", "ReflectOwnKeys", "AtomicsAdd", "AtomicsAnd", "AtomicsCompareExchange", "AtomicsExchange", "AtomicsIsLockFree", "AtomicsLoad", "AtomicsOr", "AtomicsStore", "AtomicsSub", "AtomicsXor", "ArrayPush", "ArrayPop", "ArraySlice", "ArrayIndexOf", "ArraySpliceExtract", "RegExpExec", "RegExpExecNonGlobalOrSticky", "RegExpTest", "RegExpTestInline", "RegExpMatchFast", "RegExpMatchFastGlobal", "StringReplace", "StringReplaceRegExp", "StringReplaceString", "StringIndexOf", "StringCharCodeAt", "StringCodePointAt", "StringCharAt", "StringFromCharCode", "CompareLess", "CompareLessEq", "CompareGreater", "CompareGreaterEq", "CompareBelow", "CompareBelowEq", "CompareEq", "CompareStrictEq", "CompareEqPtr", "SameValue", "Call", "DirectCall", "Construct", "DirectConstruct", "CallVarargs", "CallForwardVarargs", "ConstructVarargs", "ConstructForwardVarargs", "TailCallInlinedCaller", "DirectTailCallInlinedCaller", "TailCallVarargsInlinedCaller", "TailCallForwardVarargsInlinedCaller", "CallDirectEval", "CallWasm", "CallCustomAccessorGetter", "CallCustomAccessorSetter", "LogShadowChickenPrologue", "LogShadowChickenTail", "NewObject", "NewGenerator", "NewAsyncGenerator", "NewArray", "NewArrayWithSpread", "NewArrayWithSpecies", "NewArrayWithSize", "NewArrayWithConstantSize", "NewArrayBuffer", "NewInternalFieldObject", "NewTypedArray", "NewRegexp", "NewSymbol", "NewStringObject", "NewMap", "NewSet", "GetRestLength", "CreateRest", "Spread", "PhantomNewObject", "PutHint", "CheckStructureImmediate", "MaterializeNewObject", "PhantomNewFunction", "PhantomNewGeneratorFunction", "PhantomNewAsyncFunction", "PhantomNewAsyncGeneratorFunction", "PhantomNewInternalFieldObject", "MaterializeNewInternalFieldObject", "PhantomCreateActivation", "MaterializeCreateActivation", "PhantomNewRegexp", "OverridesHasInstance", "InstanceOf", "InstanceOfMegamorphic", "InstanceOfCustom", "MatchStructure", "IsCellWithType", "IsEmpty", "IsEmptyStorage", "HasStructureWithFlags", "TypeOfIsUndefined", "TypeOfIsObject", "TypeOfIsFunction", "IsUndefinedOrNull", "IsBoolean", "IsNumber", "IsBigInt", "GlobalIsNaN", "NumberIsNaN", "NumberIsInteger", "IsObject", "IsCallable", "IsConstructor", "IsTypedArrayView", "TypeOf", "ToBoolean", "LogicalNot", "ToPrimitive", "ToPropertyKey", "ToPropertyKeyOrNumber", "ToString", "ToNumber", "ToNumeric", "ToObject", "ToIntegerOrInfinity", "ToLength", "CallObjectConstructor", "CallStringConstructor", "CallNumberConstructor", "NumberToStringWithRadix", "NumberToStringWithValidRadixConstant", "FunctionToString", "FunctionBind", "MakeRope", "MakeAtomString", "InByVal", "InByValMegamorphic", "InById", "InByIdMegamorphic", "HasPrivateName", "HasPrivateBrand", "ProfileType", "ProfileControlFlow", "SetFunctionName", "HasOwnProperty", "GetInternalField", "PutInternalField", "CreateActivation", "PushWithScope", "CreateDirectArguments", "PhantomDirectArguments", "PhantomCreateRest", "PhantomSpread", "PhantomNewArrayWithSpread", "PhantomNewArrayBuffer", "CreateScopedArguments", "CreateClonedArguments", "PhantomClonedArguments", "GetFromArguments", "PutToArguments", "GetArgument", "NewFunction", "NewGeneratorFunction", "NewAsyncGeneratorFunction", "NewAsyncFunction", "NewBoundFunction", "Jump", "Branch", "Switch", "EntrySwitch", "Return", "TailCall", "DirectTailCall", "TailCallVarargs", "TailCallForwardVarargs", "Unreachable", "Throw", "ThrowStaticError", "CountExecution", "SuperSamplerBegin", "SuperSamplerEnd", "ForceOSRExit", "BottomValue", "CheckTraps", "StoreBarrier", "FencedStoreBarrier", "HasIndexedProperty", "GetPropertyEnumerator", "EnumeratorNextUpdateIndexAndMode", "EnumeratorNextUpdatePropertyName", "EnumeratorGetByVal", "EnumeratorInByVal", "EnumeratorHasOwnProperty", "EnumeratorPutByVal", "MapHash", "NormalizeMapKey", "MapGet", "LoadMapValue", "MapIteratorNext", "MapIteratorKey", "MapIteratorValue", "MapStorage", "MapIterationNext", "MapIterationEntry", "MapIterationEntryKey", "MapIterationEntryValue", "SetAdd", "MapSet", "MapOrSetDelete", "WeakMapGet", "WeakSetAdd", "WeakMapSet", "ExtractValueFromWeakMapGet", "StringValueOf", "StringSlice", "StringSubstring", "StringLocaleCompare", "ToLowerCase", "CallDOMGetter", "CallDOM", "InitializeEntrypointArguments", "CPUIntrinsic", "FilterCallLinkStatus", "FilterGetByStatus", "FilterInByStatus", "FilterPutByStatus", "FilterDeleteByStatus", "FilterCheckPrivateBrandStatus", "FilterSetPrivateBrandStatus", "DataViewGetInt", "DataViewGetFloat", "DataViewSet", "DateGetInt32OrNaN", "DateGetTime", "DateSetTime"]

    public init(minSize: Int, maxSize: Int, minMutationsPerSample: Int) {
        // The corpus must never be empty. Other components, such as the ProgramBuilder, rely on this
        assert(minSize >= 1)
        assert(maxSize >= minSize)

        self.minSize = minSize
        self.minMutationsPerSample = minMutationsPerSample

        self.programs = RingBuffer(maxSize: maxSize)
        self.ages = RingBuffer(maxSize: maxSize)

        self.ir_programs = RingBuffer(maxSize: maxSize)

        super.init(name: "Corpus")
    }

    override func initialize() {
        // Schedule a timer to perform cleanup regularly, but only if we"re not running as static corpus.
        if !fuzzer.config.staticCorpus {
            fuzzer.timers.scheduleTask(every: 30 * Minutes, cleanup)
            fuzzer.timers.scheduleTask(every: 15 * Minutes, printIR)
        }
    }

    public var size: Int {
        return programs.count
    }

    public var size2: Int {
        return ir_programs.count
    }

    public var size3: Int {
        return ir_programs.count
    }

    public var isEmpty: Bool {
        return size == 0
    }

    public var supportsFastStateSynchronization: Bool {
        return true
    }

    public func add(_ program: Program, _ : ProgramAspects) {
        addInternal(program)
    }

    public func addDisProgram(_ program: Program) {}

    public func addInternal(_ program: Program) {
        if program.size > 0 {
            prepareProgramForInclusion(program, index: totalEntryCounter)
            programs.append(program)
            ages.append(0)

            totalEntryCounter += 1
        }
    }

    public func addMyProgram(_ program: Program, _ aspects: ProgramAspects) {
        if program.size > 0 {
            prepareProgramForInclusion(program, index: totalEntryCounter)
            ir_programs.append(program)
        }
    }

    /// Returns a random program from this corpus for use in splicing to another program
    public func randomElementForSplicing() -> Program {
        let idx = Int.random(in: 0..<programs.count)
        let program = programs[idx]
        assert(!program.isEmpty)
        return program
    }

    /// Returns a random program from this corpus and increases its age by one.
    public func randomElementForMutating() -> Program {
        let idx = Int.random(in: 0..<programs.count)
        ages[idx] += 1
        let program = programs[idx]
        assert(!program.isEmpty)
        return program
    }

    public func allPrograms() -> [Program] {
        return Array(programs)
    }

    public func exportState() throws -> Data {
        let res = try encodeProtobufCorpus(programs)
        logger.info("Successfully serialized \(programs.count) programs")
        return res
    }

    public func importState(_ buffer: Data) throws {
        let newPrograms = try decodeProtobufCorpus(buffer)
        programs.removeAll()
        ages.removeAll()
        newPrograms.forEach(addInternal)
    }

    private func cleanup() {
        assert(!fuzzer.config.staticCorpus)
        var newPrograms = RingBuffer<Program>(maxSize: programs.maxSize)
        var newAges = RingBuffer<Int>(maxSize: ages.maxSize)

        for i in 0..<programs.count {
            let remaining = programs.count - i
            if ages[i] < minMutationsPerSample || remaining <= (minSize - newPrograms.count) {
                newPrograms.append(programs[i])
                newAges.append(ages[i])
            }
        }

        logger.info("Corpus cleanup finished: \(self.programs.count) -> \(newPrograms.count)")
        programs = newPrograms
        ages = newAges
    }

    public func printIR() {
        guard let covEvaluator = fuzzer.evaluator as? ProgramCoverageEvaluator else {
            logger.fatal("Basic Corpus needs to be provided a CoverageEvaluator")
        }
        let irCounts = covEvaluator.getIRHitCounts()
        for i in 0..<IR_list.count {
            logger.info("IR test for \(fuzzer.id)-\(IR_list[i]): \(irCounts[i]) ")
        }
    }

    public var startIndex: Int {
        return programs.startIndex
    }

    public var endIndex: Int {
        return programs.endIndex
    }

    public subscript(index: Int) -> Program {
        return programs[index]
    }

    public func index(after i: Int) -> Int {
        return i + 1
    }
}
