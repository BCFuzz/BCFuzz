// Copyright 2019 Google LLC
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
import NIO
import RediStack
import libcoverage

let redis2 = try! RedisConnection.make(
        configuration: try .init(hostname: "127.0.0.1", port: 9075),
        boundEventLoop: MultiThreadedEventLoopGroup(numberOfThreads: 1).next()
    ).wait()

/// Represents a set of newly discovered CFG edges in the target program.
public class CovEdgeSet: ProgramAspects {
    private var numEdges: UInt32
    fileprivate var edges: UnsafeMutablePointer<UInt32>?

    init(edges: UnsafeMutablePointer<UInt32>?, numEdges: UInt32) {
        self.numEdges = numEdges
        self.edges = edges
        super.init(outcome: .succeeded)
    }

    deinit {
        free(edges)
    }

    /// The number of aspects is simply the number of newly discovered coverage edges.
    public override var count: UInt32 {
        return numEdges
    }

    public override var description: String {
        return "new coverage: \(count) newly discovered edge\(count > 1 ? "s" : "") in the CFG of the target"
    }

    /// Returns an array of all the newly discovered edges of this CovEdgeSet.
    ///
    /// This adds additional copies, but is only hit when new programs are added to the corpus
    /// It is used by corpus schedulers such as MarkovCorpus that require knowledge of which samples trigger which edges
    public func getEdges() -> [UInt32] {
        return Array(UnsafeBufferPointer(start: edges, count: Int(count)))
    }

    public static func == (lhsEdges: CovEdgeSet, rhsEdges: CovEdgeSet) -> Bool {
        if lhsEdges.outcome != rhsEdges.outcome { return false }
        if lhsEdges.count != rhsEdges.count { return false }
        for i in 0..<Int(lhsEdges.count) {
            if lhsEdges.edges![i] != rhsEdges.edges![i] {
                return false
            }
        }
        return true
    }

    // Updates the internal state to match the provided collection
    fileprivate func setEdges<T: Collection>(_ collection: T) where T.Element == UInt32 {
        precondition(collection.count <= self.count)
        self.numEdges = UInt32(collection.count)
        for (i, edge) in collection.enumerated() {
            self.edges![i] = edge
        }
    }
}

public class IREdgeSet: ProgramAspects {
    public var IRID: UInt32
    private var numEdges: UInt32
    fileprivate var edges: UnsafeMutablePointer<UInt32>?
    init(IRID: UInt32, edges: UnsafeMutablePointer<UInt32>?, numEdges: UInt32) {
        self.IRID = IRID
        self.numEdges = numEdges
        self.edges = edges
        super.init(outcome: .succeeded)
    }

    deinit {} // free edges will result in double free, because IREdgeSet and CovEdgeSet share edges

    /// The number of aspects is simply the number of newly discovered coverage edges.
    public override var count: UInt32 {
        return numEdges
    }

    public override var description: String {
        return "new IR"
    }

    public static func == (lhsEdges: IREdgeSet, rhsEdges: IREdgeSet) -> Bool {
        if lhsEdges.outcome != rhsEdges.outcome { return false }
        if lhsEdges.IRID != rhsEdges.IRID { return false }
        if lhsEdges.count != rhsEdges.count { return false }
        for i in 0..<Int(lhsEdges.count) {
            if lhsEdges.edges![i] != rhsEdges.edges![i] {
                return false
            }
        }
        return true
    }
}

public class ProgramCoverageEvaluator: ComponentBase, ProgramEvaluator {
    /// Counts the number of instances. Used to create unique shared memory regions in every instance.
    private static var instances = 0

    /// Whether per-edge hit counts should be tracked as well.
    /// These are expensive to compute, so this need to be enabled explicitly.
    private var shouldTrackEdgeCounts : Bool

    /// Keep track of how often an edge has been reset. Frequently set/cleared edges will be ignored
    private var resetCounts : [UInt32:UInt64] = [:]

    /// How often an edge may be reset at most before it is considered non-deterministic.
    /// In that case, the edge is marked as found, but will not be considered an aspect of any program.
    private let maxResetCount : UInt64 = 1000
    
    private var IR_list: [String] = ["tail_call_varargs","call_varargs","iterator_next","construct_varargs","iterator_open","set_private_brand","check_private_brand","put_by_id","construct","tail_call","call_direct_eval","tail_call_forward_arguments","create_generator","create_async_generator","create_promise","catch","new_array_with_size","new_array_buffer","get_by_id","get_length","profile_type","profile_control_flow","new_array_with_species","call","call_ignore_result","resolve_scope","get_from_scope","put_to_scope","create_this","new_object","new_array","get_by_val_with_this","get_by_val","put_private_name","get_private_name","put_by_val","put_by_val_direct","in_by_val","enumerator_next","enumerator_in_by_val","enumerator_has_own_property","enumerator_put_by_val","to_this","enumerator_get_by_val","get_by_id_direct","try_get_by_id","jneq_ptr","get_argument","get_from_arguments","get_prototype_of","get_internal_field","get_by_id_with_this","to_object","in_by_id","has_private_name","has_private_brand","put_by_id_with_this","del_by_id","put_by_val_with_this","del_by_val","put_getter_by_id","put_setter_by_id","put_getter_setter_by_id","put_getter_by_val","put_setter_by_val","define_data_property","define_accessor_property","jmp","jtrue","jfalse","jeq_null","jneq_null","jundefined_or_null","jnundefined_or_null","jeq_ptr","jeq","jstricteq","jneq","jnstricteq","jless","jlesseq","jgreater","jgreatereq","jnless","jnlesseq","jngreater","jngreatereq","jbelow","jbeloweq","loop_hint","switch_imm","switch_char","switch_string","new_func","new_func_exp","new_generator_func","new_generator_func_exp","new_async_func","new_async_func_exp","new_async_generator_func","new_async_generator_func_exp","set_function_name","ret","strcat","to_primitive","to_property_key","to_property_key_or_number","put_to_arguments","push_with_scope","create_lexical_environment","create_generator_frame_environment","get_parent_scope","throw","throw_static_error","debug","end","get_property_enumerator","unreachable","create_rest","get_rest_length","yield","check_traps","log_shadow_chicken_prologue","log_shadow_chicken_tail","resolve_scope_for_hoisting_func_decl_in_eval","put_internal_field","nop","super_sampler_begin","wide16","super_sampler_end","wide32","enter","get_scope","create_direct_arguments","create_scoped_arguments","create_cloned_arguments","new_promise","new_generator","argument_count","check_tdz","new_array_with_spread","spread","new_regexp","mov","eq","neq","stricteq","nstricteq","less","lesseq","greater","greatereq","below","beloweq","mod","pow","urshift","add","mul","div","sub","bitand","bitor","bitxor","lshift","rshift","eq_null","neq_null","to_string","unsigned","is_empty","typeof_is_undefined","typeof_is_object","typeof_is_function","is_undefined_or_null","is_boolean","is_number","is_big_int","is_object","is_callable","is_constructor","inc","dec","negate","not","identity_with_profile","overrides_has_instance","instanceof","instanceof_custom","typeof","is_cell_with_type","has_structure_with_flags","to_number","to_numeric","bitnot"]

    private var DFGIR_list: [String] = ["JSConstant", "DoubleConstant", "Int52Constant", "LazyJSConstant", "Identity", "IdentityWithProfile", "ToThis", "CreateThis", "CreatePromise", "CreateGenerator", "CreateAsyncGenerator", "GetCallee", "SetCallee", "GetArgumentCountIncludingThis", "SetArgumentCountIncludingThis", "GetLocal", "SetLocal", "PutStack", "KillStack", "GetStack", "MovHint", "ZombieHint", "ExitOK", "Phantom", "Check", "CheckVarargs", "Upsilon", "Phi", "Flush", "PhantomLocal", "ExtractFromTuple", "LoopHint", "ExtractOSREntryLocal", "ExtractCatchLocal", "ClearCatchLocals", "CheckTierUpInLoop", "CheckTierUpAndOSREnter", "CheckTierUpAtReturn", "SetArgumentDefinitely", "SetArgumentMaybe", "InvalidationPoint", "ValueBitNot", "ArithBitNot", "ValueBitAnd", "ArithBitAnd", "ValueBitOr", "ArithBitOr", "ValueBitXor", "ArithBitXor", "ArithBitLShift", "ValueBitLShift", "ArithBitRShift", "ValueBitRShift", "BitURShift", "ValueToInt32", "UInt32ToNumber", "BooleanToNumber", "DoubleAsInt32", "DoubleRep", "Int52Rep", "ValueRep", "FiatInt52", "ArithAdd", "ArithClz32", "ArithSub", "ArithNegate", "ArithMul", "ArithIMul", "ArithDiv", "ArithMod", "ArithAbs", "ArithMin", "ArithMax", "ArithFRound", "ArithF16Round", "ArithPow", "ArithRandom", "ArithRound", "ArithFloor", "ArithCeil", "ArithTrunc", "ArithSqrt", "ArithUnary", "Inc", "Dec", "ValueNegate", "ValueAdd", "ValueSub", "ValueMul", "ValueDiv", "ValuePow", "ValueMod", "StrCat", "GetByVal", "GetByValMegamorphic", "GetByValWithThis", "GetByValWithThisMegamorphic", "GetMyArgumentByVal", "GetMyArgumentByValOutOfBounds", "VarargsLength", "LoadVarargs", "ForwardVarargs", "PutByValDirect", "PutByVal", "PutByValAlias", "PutByValMegamorphic", "PutPrivateName", "PutPrivateNameById", "CheckPrivateBrand", "SetPrivateBrand", "TryGetById", "GetById", "GetByIdFlush", "GetByIdWithThis", "GetByIdWithThisMegamorphic", "GetByIdDirect", "GetByIdDirectFlush", "GetByIdMegamorphic", "PutById", "PutByIdFlush", "PutByIdDirect", "PutByIdWithThis", "PutByIdMegamorphic", "PutByValWithThis", "PutGetterById", "PutSetterById", "PutGetterSetterById", "PutGetterByVal", "PutSetterByVal", "DefineDataProperty", "DefineAccessorProperty", "DeleteById", "DeleteByVal", "CheckStructure", "CheckStructureOrEmpty", "GetExecutable", "PutStructure", "AllocatePropertyStorage", "ReallocatePropertyStorage", "GetButterfly", "NukeStructureAndSetButterfly", "CheckArray", "CheckArrayOrEmpty", "GetPrivateName", "GetPrivateNameById", "CheckDetached", "Arrayify", "ArrayifyToStructure", "GetIndexedPropertyStorage", "ResolveRope", "ConstantStoragePointer", "GetGetter", "GetSetter", "GetByOffset", "GetGetterSetterByOffset", "MultiGetByOffset", "PutByOffset", "MultiPutByOffset", "MultiDeleteByOffset", "GetArrayLength", "GetUndetachedTypeArrayLength", "GetTypedArrayLengthAsInt52", "GetVectorLength", "GetTypedArrayByteOffset", "GetTypedArrayByteOffsetAsInt52", "GetWebAssemblyInstanceExports", "GetScope", "SkipScope", "ResolveScope", "ResolveScopeForHoistingFuncDeclInEval", "GetGlobalObject", "GetGlobalThis", "UnwrapGlobalProxy", "GetClosureVar", "PutClosureVar", "GetGlobalVar", "GetGlobalLexicalVariable", "PutGlobalVariable", "GetDynamicVar", "PutDynamicVar", "NotifyWrite", "GetRegExpObjectLastIndex", "SetRegExpObjectLastIndex", "RecordRegExpCachedResult", "CheckIsConstant", "CheckNotEmpty", "AssertNotEmpty", "CheckBadValue", "AssertInBounds", "CheckInBounds", "CheckInBoundsInt52", "CheckIdent", "CheckTypeInfoFlags", "CheckJSCast", "CheckNotJSCast", "ParseInt", "GetPrototypeOf", "ObjectAssign", "ObjectCreate", "ObjectKeys", "ObjectGetOwnPropertyNames", "ObjectGetOwnPropertySymbols", "ObjectToString", "ReflectOwnKeys", "AtomicsAdd", "AtomicsAnd", "AtomicsCompareExchange", "AtomicsExchange", "AtomicsIsLockFree", "AtomicsLoad", "AtomicsOr", "AtomicsStore", "AtomicsSub", "AtomicsXor", "ArrayPush", "ArrayPop", "ArraySlice", "ArrayIndexOf", "ArraySpliceExtract", "RegExpExec", "RegExpExecNonGlobalOrSticky", "RegExpTest", "RegExpTestInline", "RegExpMatchFast", "RegExpMatchFastGlobal", "StringReplace", "StringReplaceRegExp", "StringReplaceString", "StringIndexOf", "StringCharCodeAt", "StringCodePointAt", "StringCharAt", "StringFromCharCode", "CompareLess", "CompareLessEq", "CompareGreater", "CompareGreaterEq", "CompareBelow", "CompareBelowEq", "CompareEq", "CompareStrictEq", "CompareEqPtr", "SameValue", "Call", "DirectCall", "Construct", "DirectConstruct", "CallVarargs", "CallForwardVarargs", "ConstructVarargs", "ConstructForwardVarargs", "TailCallInlinedCaller", "DirectTailCallInlinedCaller", "TailCallVarargsInlinedCaller", "TailCallForwardVarargsInlinedCaller", "CallDirectEval", "CallWasm", "CallCustomAccessorGetter", "CallCustomAccessorSetter", "LogShadowChickenPrologue", "LogShadowChickenTail", "NewObject", "NewGenerator", "NewAsyncGenerator", "NewArray", "NewArrayWithSpread", "NewArrayWithSpecies", "NewArrayWithSize", "NewArrayWithConstantSize", "NewArrayBuffer", "NewInternalFieldObject", "NewTypedArray", "NewRegexp", "NewSymbol", "NewStringObject", "NewMap", "NewSet", "GetRestLength", "CreateRest", "Spread", "PhantomNewObject", "PutHint", "CheckStructureImmediate", "MaterializeNewObject", "PhantomNewFunction", "PhantomNewGeneratorFunction", "PhantomNewAsyncFunction", "PhantomNewAsyncGeneratorFunction", "PhantomNewInternalFieldObject", "MaterializeNewInternalFieldObject", "PhantomCreateActivation", "MaterializeCreateActivation", "PhantomNewRegexp", "OverridesHasInstance", "InstanceOf", "InstanceOfMegamorphic", "InstanceOfCustom", "MatchStructure", "IsCellWithType", "IsEmpty", "IsEmptyStorage", "HasStructureWithFlags", "TypeOfIsUndefined", "TypeOfIsObject", "TypeOfIsFunction", "IsUndefinedOrNull", "IsBoolean", "IsNumber", "IsBigInt", "GlobalIsNaN", "NumberIsNaN", "NumberIsInteger", "IsObject", "IsCallable", "IsConstructor", "IsTypedArrayView", "TypeOf", "ToBoolean", "LogicalNot", "ToPrimitive", "ToPropertyKey", "ToPropertyKeyOrNumber", "ToString", "ToNumber", "ToNumeric", "ToObject", "ToIntegerOrInfinity", "ToLength", "CallObjectConstructor", "CallStringConstructor", "CallNumberConstructor", "NumberToStringWithRadix", "NumberToStringWithValidRadixConstant", "FunctionToString", "FunctionBind", "MakeRope", "MakeAtomString", "InByVal", "InByValMegamorphic", "InById", "InByIdMegamorphic", "HasPrivateName", "HasPrivateBrand", "ProfileType", "ProfileControlFlow", "SetFunctionName", "HasOwnProperty", "GetInternalField", "PutInternalField", "CreateActivation", "PushWithScope", "CreateDirectArguments", "PhantomDirectArguments", "PhantomCreateRest", "PhantomSpread", "PhantomNewArrayWithSpread", "PhantomNewArrayBuffer", "CreateScopedArguments", "CreateClonedArguments", "PhantomClonedArguments", "GetFromArguments", "PutToArguments", "GetArgument", "NewFunction", "NewGeneratorFunction", "NewAsyncGeneratorFunction", "NewAsyncFunction", "NewBoundFunction", "Jump", "Branch", "Switch", "EntrySwitch", "Return", "TailCall", "DirectTailCall", "TailCallVarargs", "TailCallForwardVarargs", "Unreachable", "Throw", "ThrowStaticError", "CountExecution", "SuperSamplerBegin", "SuperSamplerEnd", "ForceOSRExit", "BottomValue", "CheckTraps", "StoreBarrier", "FencedStoreBarrier", "HasIndexedProperty", "GetPropertyEnumerator", "EnumeratorNextUpdateIndexAndMode", "EnumeratorNextUpdatePropertyName", "EnumeratorGetByVal", "EnumeratorInByVal", "EnumeratorHasOwnProperty", "EnumeratorPutByVal", "MapHash", "NormalizeMapKey", "MapGet", "LoadMapValue", "MapIteratorNext", "MapIteratorKey", "MapIteratorValue", "MapStorage", "MapIterationNext", "MapIterationEntry", "MapIterationEntryKey", "MapIterationEntryValue", "SetAdd", "MapSet", "MapOrSetDelete", "WeakMapGet", "WeakSetAdd", "WeakMapSet", "ExtractValueFromWeakMapGet", "StringValueOf", "StringSlice", "StringSubstring", "StringLocaleCompare", "ToLowerCase", "CallDOMGetter", "CallDOM", "InitializeEntrypointArguments", "CPUIntrinsic", "FilterCallLinkStatus", "FilterGetByStatus", "FilterInByStatus", "FilterPutByStatus", "FilterDeleteByStatus", "FilterCheckPrivateBrandStatus", "FilterSetPrivateBrandStatus", "DataViewGetInt", "DataViewGetFloat", "DataViewSet", "DateGetInt32OrNaN", "DateGetTime", "DateSetTime"]

    /// The current edge coverage percentage.
    public var currentScore: Double {
        return Double(context.found_edges) / Double(context.num_edges)
    }

    public var foundIR: Int {
        return Int(context.found_irs)
    }

    /// Context for the C library.
    private var context = libcoverage.cov_context()

    public init(runner: ScriptRunner) {
        // In order to keep clean abstractions, any corpus scheduler requiring edge counting
        // needs to call EnableEdgeTracking(), via downcasting of ProgramEvaluator
        self.shouldTrackEdgeCounts = false

        super.init(name: "Coverage")

        let id = ProgramCoverageEvaluator.instances
        ProgramCoverageEvaluator.instances += 1

        context.id = Int32(id)
        guard libcoverage.cov_initialize(&context) == 0 else {
            fatalError("Could not initialize libcoverage")
        }
#if os(Windows)
        runner.setEnvironmentVariable("SHM_ID", to: "shm_id_\(GetCurrentProcessId())_\(id)")
#else
        runner.setEnvironmentVariable("SHM_ID", to: "shm_id_\(getpid())_\(id)")
        runner.setEnvironmentVariable("SHM_ID3", to: "shm_id_\(getpid())_\(id)_3")
        runner.setEnvironmentVariable("SHM_ID4", to: "shm_id_\(getpid())_\(id)_4")
#endif

    }

    public func enableEdgeTracking() {
        assert(!isInitialized) // This should only be called prior to initialization
        shouldTrackEdgeCounts = true
    }


    public func getEdgeHitCounts() -> [UInt32] {
        var edgeCounts = libcoverage.edge_counts()
        let result = libcoverage.cov_get_edge_counts(&context, &edgeCounts)
        if result == -1 {
            logger.error("Error retrifying smallest hit count edges")
            return []
        }
        var edgeArray = Array(UnsafeBufferPointer(start: edgeCounts.edge_hit_count, count: Int(edgeCounts.count)))

        // Clear all edges that have hit their reset limits
        for (edge, count) in resetCounts {
            if count >= maxResetCount {
                edgeArray[Int(edge)] = 0
            }
        }

        return edgeArray
    }

    public func getIRHitCounts() -> [UInt32] {
        var edgeCounts = libcoverage.edge_counts()
        let result = libcoverage.ir_get_edge_counts(&context, &edgeCounts)
        if result == -1 {
            logger.error("Error retrifying smallest hit count irs")
            return []
        }
        let edgeArray = Array(UnsafeBufferPointer(start: edgeCounts.edge_hit_count, count: Int(edgeCounts.count)))

        // Clear all edges that have hit their reset limits
        //for (edge, count) in resetCounts {
        //    if count >= maxResetCount {
        //        edgeArray[Int(edge)] = 0
        //    }
        //}

        return edgeArray
    }

    override func initialize() {
        // Must clear the shared memory bitmap before every execution
        fuzzer.registerEventListener(for: fuzzer.events.PreExecute) { execution in
            libcoverage.cov_clear_bitmap(&self.context)
        }

        // Unlink the shared memory regions on shutdown
        fuzzer.registerEventListener(for: fuzzer.events.Shutdown) { _ in
            libcoverage.cov_shutdown(&self.context)
        }

        let _ = fuzzer.execute(Program(), purpose: .startup)
        libcoverage.cov_finish_initialization(&context, shouldTrackEdgeCounts ? 1 : 0)
        logger.info("Initialized, \(context.num_edges) edges")
    }

    public func evaluate(_ execution: Execution, _ program: Program) -> ProgramAspects? {
        assert(execution.outcome == .succeeded)
        var newEdgeSet = libcoverage.edge_set()
        var newEdgeSet2 = libcoverage.edge_set()
        let result = libcoverage.cov_evaluate(&context, &newEdgeSet, &newEdgeSet2)
        guard result != -1 else {
            logger.error("Could not evaluate sample")
            return nil
        }

        var newIRSet = libcoverage.edge_set()
        let ir_result = libcoverage.cov_evaluate2(&context, &newIRSet);

        // record
        if program.origin >= 0 { 
            self.fuzzer.bc_testcase_num += 1.0 // testcases from bc seed and exclude testcases from minimization
            let preserved = libcoverage.ir_compare_equal(&context, UInt32(program.origin))
            if preserved == 1 {
                self.fuzzer.bc_preserve_num += 1.0 // preserve old bc
                if result == 1 {
                    self.fuzzer.bc_new_edge += 1.0 // preserve old bc and have new edge
                    
                    let bothAspect = IREdgeSet(IRID: UInt32(program.origin), edges: newEdgeSet2.edge_indices, numEdges: newEdgeSet2.count)
                    self.fuzzer.corpus.addMyProgram(program, bothAspect)
                    /*
                    self.fuzzer.fuzzGroup.enter()
                    self.fuzzer.minimizer.myMinimize(program, withAspects: bothAspect){ minimizedProgram2 in
                        self.fuzzer.fuzzGroup.leave()
                        let IR_index2 = Int(bothAspect.IRID)
                        if IR_index2 < 300 {
                            minimizedProgram2.comments.add("Program is interesting due to \(self.IR_list[IR_index2]) preseved and new edges explored", at: .footer)
                        } else {
                            minimizedProgram2.comments.add("Program is interesting due to \(self.DFGIR_list[IR_index2 - 300]) preseved and new edges explored", at: .footer)
                        }
                        self.fuzzer.dispatchEvent(self.fuzzer.events.NewIRProgramFound, data: minimizedProgram2)
                        self.fuzzer.corpus.addMyProgram(minimizedProgram2, bothAspect)
                    }
                    */
                }
            }
        }

        if ir_result == 1 {
            let tempAspect = CovEdgeSet(edges: newIRSet.edge_indices, numEdges: newIRSet.count)
            let edgeArray = tempAspect.getEdges()      
            for i in 0..<newIRSet.count {
                try! redis2.send(RedisCommand.init(keyword: "SADD", arguments: [RESPValue.init(from: "bc"), RESPValue.init(from: "\(edgeArray[Int(i)])")], mapValueToResult: { _ in })).wait()
                let IRAspect = IREdgeSet(IRID: edgeArray[Int(i)], edges: nil, numEdges: 0)
                self.fuzzer.fuzzGroup.enter()
                self.fuzzer.minimizer.myMinimize(program, withAspects: IRAspect){ minimizedProgram in
                    self.fuzzer.fuzzGroup.leave()
                    let IR_index = Int(IRAspect.IRID)
                    let seed_line = minimizedProgram.line
                    if IR_index < 300 {
                        minimizedProgram.comments.add("Program is interesting due to \(self.IR_list[IR_index]) in JS line \(seed_line)", at: .footer)
                    } else {
                        minimizedProgram.comments.add("Program is interesting due to \(self.DFGIR_list[IR_index - 300]) in JS line \(seed_line)", at: .footer)
                    }
                    self.fuzzer.dispatchEvent(self.fuzzer.events.NewIRProgramFound, data: minimizedProgram)
                    self.fuzzer.corpus.addMyProgram(minimizedProgram, IRAspect)
                }
            }
        }

        if result == 1 {
            return CovEdgeSet(edges: newEdgeSet.edge_indices, numEdges: newEdgeSet.count)
        } else {
            assert(newEdgeSet.edge_indices == nil && newEdgeSet.count == 0)
            return nil
        }
    }

    public func evaluateCrash(_ execution: Execution) -> ProgramAspects? {
        assert(execution.outcome.isCrash())
        let result = libcoverage.cov_evaluate_crash(&context)
        guard result != -1 else {
            logger.error("Could not evaluate crash")
            return nil
        }

        if result == 1 {
            // For minimization of crashes we only care about the outcome, not the edges covered.
            return ProgramAspects(outcome: execution.outcome)
        } else {
            return nil
        }
    }

    public func hasAspects(_ execution: Execution, _ aspects: ProgramAspects) -> Bool {
        guard execution.outcome == aspects.outcome else {
            return false
        }

        if execution.outcome.isCrash() {
            // For crashes, we don't care about the edges that were triggered, just about the outcome itself.
            return true
        }

        guard let edgeSet = aspects as? CovEdgeSet else {
            fatalError("Invalid aspects passed to hasAspects")
        }

        let result = libcoverage.cov_compare_equal(&context, edgeSet.edges, edgeSet.count)
        if result == -1 {
            logger.error("Could not compare progam executions")
        }
        return result == 1
    }

    public func hasAspects2(_ execution: Execution, _ aspects: ProgramAspects) -> Bool {
        guard execution.outcome == aspects.outcome else {
            return false
        }

        if execution.outcome.isCrash() {
            // For crashes, we don't care about the edges that were triggered, just about the outcome itself.
            return true
        }

        guard let edgeSet = aspects as? IREdgeSet else {
            fatalError("Invalid aspects passed to hasAspects")
        }
        //let result = 1
        let result = libcoverage.ir_compare_equal(&context, edgeSet.IRID)
        if result == -1 {
            logger.error("Could not compare progam executions")
        }

        if edgeSet.count == 0 {
            return result == 1
        } 
        else if result == 1 {
            //print("test begin, count: \(edgeSet.count)")
            //let tmpArray = Array(UnsafeBufferPointer(start: edgeSet.edges, count: Int(edgeSet.count)))
            //for i in 0..<edgeSet.count {
            //    print(tmpArray[Int(i)])
            //}
            //print("test middile")
            let edge_result = libcoverage.cov_compare_equal(&context, edgeSet.edges, edgeSet.count)
            //print("test end")
            return edge_result == 1
        }
        else {
            return false
        }
        
    }

    public func get_line(_ aspects: ProgramAspects) -> Int
    {
        guard let edgeSet = aspects as? IREdgeSet else {
            fatalError("Invalid aspects passed to hasAspects")
        }
        let seed_line = libcoverage.get_op_line(&self.context, edgeSet.IRID)
        return Int(seed_line)
    }

    public func computeAspectIntersection(of program: Program, with aspects: ProgramAspects) -> ProgramAspects? {
        guard let firstCovEdgeSet = aspects as? CovEdgeSet else {
            logger.fatal("Coverage Evaluator received non coverage aspects")
        }

        // Mark all edges in the provided aspects as undiscovered so they can be retriggered during the next execution.
        resetAspects(firstCovEdgeSet)

        // Execute the program and collect coverage information.
        let execution = fuzzer.execute(program, purpose: .checkForDeterministicBehavior)
        guard execution.outcome == .succeeded else { return nil }
        guard let secondCovEdgeSet = evaluate(execution, program) as? CovEdgeSet else { return nil }

        let firstEdgeSet = Set(UnsafeBufferPointer(start: firstCovEdgeSet.edges, count: Int(firstCovEdgeSet.count)))
        let secondEdgeSet = Set(UnsafeBufferPointer(start: secondCovEdgeSet.edges, count: Int(secondCovEdgeSet.count)))

        // Reset all edges that were only triggered by the 2nd execution (those only triggered by the 1st execution were already reset earlier).
        for edge in secondEdgeSet.subtracting(firstEdgeSet) {
            resetEdge(edge)
        }

        // Compute the intersection of the edges.
        let intersectedEdgeSet = secondEdgeSet.intersection(firstEdgeSet)
        guard intersectedEdgeSet.count != 0 else { return nil }

        // Here we reuse one of the existing CovEdgeSets instead of creating a new one to avoid a malloc() and free() of the backing buffer.
        let intersectedCovEdgeSet = secondCovEdgeSet
        intersectedCovEdgeSet.setEdges(intersectedEdgeSet)

        return intersectedCovEdgeSet
    }

    public func exportState() -> Data {
        var state = Data()
        state.append(Data(bytes: &context.num_edges, count: 4))
        state.append(Data(bytes: &context.bitmap_size, count: 4))
        state.append(Data(bytes: &context.found_edges, count: 4))
        state.append(context.virgin_bits, count: Int(context.bitmap_size))
        state.append(context.crash_bits, count: Int(context.bitmap_size))
        return state
    }

    public func importState(_ state: Data) throws {
        assert(isInitialized)
        let headerSize = 12     // 3 x 4 bytes: num_edges, bitmap_size, found_edges. See exportState() above

        guard state.count == headerSize + Int(context.bitmap_size) * 2 else {
            throw FuzzilliError.evaluatorStateImportError("Cannot import coverage state as it has an unexpected size. Ensure all instances use the same build of the target")
        }

        let numEdges = state.withUnsafeBytes { $0.load(fromByteOffset: 0, as: UInt32.self) }
        let bitmapSize = state.withUnsafeBytes { $0.load(fromByteOffset: 4, as: UInt32.self) }
        let foundEdges = state.withUnsafeBytes { $0.load(fromByteOffset: 8, as: UInt32.self) }

        guard bitmapSize == context.bitmap_size && numEdges == context.num_edges else {
            throw FuzzilliError.evaluatorStateImportError("Cannot import coverage state due to different bitmap sizes. Ensure all instances use the same build of the target")
        }

        context.found_edges = foundEdges

        var start = state.startIndex + headerSize
        state.copyBytes(to: context.virgin_bits, from: start..<start + Int(bitmapSize))
        start += Int(bitmapSize)
        state.copyBytes(to: context.crash_bits, from: start..<start + Int(bitmapSize))

        logger.info("Imported existing coverage state with \(foundEdges) edges already discovered")
    }

    public func resetState() {
        resetCounts = [:]
        libcoverage.cov_reset_state(&context)
    }

    


    // TODO See if we want to count the number of non-deterministic edges and expose them through the fuzzer statistics (if deterministic mode is enabled)
    private func resetEdge(_ edge: UInt32) {
        resetCounts[edge] = (resetCounts[edge] ?? 0) + 1
        if resetCounts[edge]! <= maxResetCount {
            libcoverage.cov_clear_edge_data(&context, edge)
        }
    }

    private func resetAspects(_ aspects: CovEdgeSet) {
        for i in 0..<Int(aspects.count) {
            resetEdge(aspects.edges![i])
        }
    }
}
