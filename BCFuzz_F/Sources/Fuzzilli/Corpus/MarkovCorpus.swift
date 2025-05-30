import Foundation

/// Corpus & Scheduler based on
/// Coverage-based Greybox Fuzzing as Markov Chain paper
/// https://mboehme.github.io/paper/TSE18.pdf
/// Simply put, the corpus keeps track of which paths have been found, and prioritizes seeds
/// whose path has been hit less than average. Ideally, this allows the fuzzer to prioritize
/// less explored coverage.
/// In the paper, a number of iterations is assigned to each sample, and each sample is then
/// scheduled that number of times. This implementation finds 1 / desiredSelectionProportion
/// of the least hit edges, and schedules those. After those have been mutated and evalutated,
/// the list is regenerated.
/// TODO:
/// - In order to properly implement the paper, the number of executions of each sample needs
///     to be scaled by its execution time (e.g. multiple by timeout / execution time), to
///     prioritize faster samples

public class MarkovCorpus: ComponentBase, Corpus {
    // All programs that were added to the corpus so far
    private var allIncludedPrograms: [Program] = []
    // Queue of programs to be executed next, all of which hit a rare edge
    private var programExecutionQueue: [Program] = []

    // For each edge encountered thus far, track which program initially discovered it
    //private var edgeMap: [UInt32:Program] = [:]

    private var edgeMap: [UInt32: [Program]] = [:]
    private var ageMap: [UInt32: [Int]] = [:]

    private var programs: RingBuffer<Program>
    private var ages: RingBuffer<Int>

    private var disprograms: RingBuffer<Program>

    // This scheduler tracks the total number of samples it has returned
    // This allows it to build an initial baseline by randomly selecting a program to mutate
    // before switching to the more computationally expensive selection of programs that
    // hit infreqent edges
    private var totalExecs: UInt32 = 0

    // This scheduler returns one base program multiple times, in order to compensate the overhead caused by tracking
    // edge counts
    private var currentProg: Program
    private var remainingEnergy: UInt32 = 0

    private let maxSize = Int.max
    private let minSize = 1000
    private let minMutationsPerSample = 25

    private var IR_list: [String] = ["tail_call_varargs","call_varargs","iterator_next","construct_varargs","iterator_open","set_private_brand","check_private_brand","put_by_id","construct","tail_call","call_direct_eval","tail_call_forward_arguments","create_generator","create_async_generator","create_promise","catch","new_array_with_size","new_array_buffer","get_by_id","get_length","profile_type","profile_control_flow","new_array_with_species","call","call_ignore_result","resolve_scope","get_from_scope","put_to_scope","create_this","new_object","new_array","get_by_val_with_this","get_by_val","put_private_name","get_private_name","put_by_val","put_by_val_direct","in_by_val","enumerator_next","enumerator_in_by_val","enumerator_has_own_property","enumerator_put_by_val","to_this","enumerator_get_by_val","get_by_id_direct","try_get_by_id","jneq_ptr","get_argument","get_from_arguments","get_prototype_of","get_internal_field","get_by_id_with_this","to_object","in_by_id","has_private_name","has_private_brand","put_by_id_with_this","del_by_id","put_by_val_with_this","del_by_val","put_getter_by_id","put_setter_by_id","put_getter_setter_by_id","put_getter_by_val","put_setter_by_val","define_data_property","define_accessor_property","jmp","jtrue","jfalse","jeq_null","jneq_null","jundefined_or_null","jnundefined_or_null","jeq_ptr","jeq","jstricteq","jneq","jnstricteq","jless","jlesseq","jgreater","jgreatereq","jnless","jnlesseq","jngreater","jngreatereq","jbelow","jbeloweq","loop_hint","switch_imm","switch_char","switch_string","new_func","new_func_exp","new_generator_func","new_generator_func_exp","new_async_func","new_async_func_exp","new_async_generator_func","new_async_generator_func_exp","set_function_name","ret","strcat","to_primitive","to_property_key","to_property_key_or_number","put_to_arguments","push_with_scope","create_lexical_environment","create_generator_frame_environment","get_parent_scope","throw","throw_static_error","debug","end","get_property_enumerator","unreachable","create_rest","get_rest_length","yield","check_traps","log_shadow_chicken_prologue","log_shadow_chicken_tail","resolve_scope_for_hoisting_func_decl_in_eval","put_internal_field","nop","super_sampler_begin","wide16","super_sampler_end","wide32","enter","get_scope","create_direct_arguments","create_scoped_arguments","create_cloned_arguments","new_promise","new_generator","argument_count","check_tdz","new_array_with_spread","spread","new_regexp","mov","eq","neq","stricteq","nstricteq","less","lesseq","greater","greatereq","below","beloweq","mod","pow","urshift","add","mul","div","sub","bitand","bitor","bitxor","lshift","rshift","eq_null","neq_null","to_string","unsigned","is_empty","typeof_is_undefined","typeof_is_object","typeof_is_function","is_undefined_or_null","is_boolean","is_number","is_big_int","is_object","is_callable","is_constructor","inc","dec","negate","not","identity_with_profile","overrides_has_instance","instanceof","instanceof_custom","typeof","is_cell_with_type","has_structure_with_flags","to_number","to_numeric","bitnot"]

    private var DFGIR_list: [String] = ["JSConstant", "DoubleConstant", "Int52Constant", "LazyJSConstant", "Identity", "IdentityWithProfile", "ToThis", "CreateThis", "CreatePromise", "CreateGenerator", "CreateAsyncGenerator", "GetCallee", "SetCallee", "GetArgumentCountIncludingThis", "SetArgumentCountIncludingThis", "GetLocal", "SetLocal", "PutStack", "KillStack", "GetStack", "MovHint", "ZombieHint", "ExitOK", "Phantom", "Check", "CheckVarargs", "Upsilon", "Phi", "Flush", "PhantomLocal", "ExtractFromTuple", "LoopHint", "ExtractOSREntryLocal", "ExtractCatchLocal", "ClearCatchLocals", "CheckTierUpInLoop", "CheckTierUpAndOSREnter", "CheckTierUpAtReturn", "SetArgumentDefinitely", "SetArgumentMaybe", "InvalidationPoint", "ValueBitNot", "ArithBitNot", "ValueBitAnd", "ArithBitAnd", "ValueBitOr", "ArithBitOr", "ValueBitXor", "ArithBitXor", "ArithBitLShift", "ValueBitLShift", "ArithBitRShift", "ValueBitRShift", "BitURShift", "ValueToInt32", "UInt32ToNumber", "BooleanToNumber", "DoubleAsInt32", "DoubleRep", "Int52Rep", "ValueRep", "FiatInt52", "ArithAdd", "ArithClz32", "ArithSub", "ArithNegate", "ArithMul", "ArithIMul", "ArithDiv", "ArithMod", "ArithAbs", "ArithMin", "ArithMax", "ArithFRound", "ArithF16Round", "ArithPow", "ArithRandom", "ArithRound", "ArithFloor", "ArithCeil", "ArithTrunc", "ArithSqrt", "ArithUnary", "Inc", "Dec", "ValueNegate", "ValueAdd", "ValueSub", "ValueMul", "ValueDiv", "ValuePow", "ValueMod", "StrCat", "GetByVal", "GetByValMegamorphic", "GetByValWithThis", "GetByValWithThisMegamorphic", "GetMyArgumentByVal", "GetMyArgumentByValOutOfBounds", "VarargsLength", "LoadVarargs", "ForwardVarargs", "PutByValDirect", "PutByVal", "PutByValAlias", "PutByValMegamorphic", "PutPrivateName", "PutPrivateNameById", "CheckPrivateBrand", "SetPrivateBrand", "TryGetById", "GetById", "GetByIdFlush", "GetByIdWithThis", "GetByIdWithThisMegamorphic", "GetByIdDirect", "GetByIdDirectFlush", "GetByIdMegamorphic", "PutById", "PutByIdFlush", "PutByIdDirect", "PutByIdWithThis", "PutByIdMegamorphic", "PutByValWithThis", "PutGetterById", "PutSetterById", "PutGetterSetterById", "PutGetterByVal", "PutSetterByVal", "DefineDataProperty", "DefineAccessorProperty", "DeleteById", "DeleteByVal", "CheckStructure", "CheckStructureOrEmpty", "GetExecutable", "PutStructure", "AllocatePropertyStorage", "ReallocatePropertyStorage", "GetButterfly", "NukeStructureAndSetButterfly", "CheckArray", "CheckArrayOrEmpty", "GetPrivateName", "GetPrivateNameById", "CheckDetached", "Arrayify", "ArrayifyToStructure", "GetIndexedPropertyStorage", "ResolveRope", "ConstantStoragePointer", "GetGetter", "GetSetter", "GetByOffset", "GetGetterSetterByOffset", "MultiGetByOffset", "PutByOffset", "MultiPutByOffset", "MultiDeleteByOffset", "GetArrayLength", "GetUndetachedTypeArrayLength", "GetTypedArrayLengthAsInt52", "GetVectorLength", "GetTypedArrayByteOffset", "GetTypedArrayByteOffsetAsInt52", "GetWebAssemblyInstanceExports", "GetScope", "SkipScope", "ResolveScope", "ResolveScopeForHoistingFuncDeclInEval", "GetGlobalObject", "GetGlobalThis", "UnwrapGlobalProxy", "GetClosureVar", "PutClosureVar", "GetGlobalVar", "GetGlobalLexicalVariable", "PutGlobalVariable", "GetDynamicVar", "PutDynamicVar", "NotifyWrite", "GetRegExpObjectLastIndex", "SetRegExpObjectLastIndex", "RecordRegExpCachedResult", "CheckIsConstant", "CheckNotEmpty", "AssertNotEmpty", "CheckBadValue", "AssertInBounds", "CheckInBounds", "CheckInBoundsInt52", "CheckIdent", "CheckTypeInfoFlags", "CheckJSCast", "CheckNotJSCast", "ParseInt", "GetPrototypeOf", "ObjectAssign", "ObjectCreate", "ObjectKeys", "ObjectGetOwnPropertyNames", "ObjectGetOwnPropertySymbols", "ObjectToString", "ReflectOwnKeys", "AtomicsAdd", "AtomicsAnd", "AtomicsCompareExchange", "AtomicsExchange", "AtomicsIsLockFree", "AtomicsLoad", "AtomicsOr", "AtomicsStore", "AtomicsSub", "AtomicsXor", "ArrayPush", "ArrayPop", "ArraySlice", "ArrayIndexOf", "ArraySpliceExtract", "RegExpExec", "RegExpExecNonGlobalOrSticky", "RegExpTest", "RegExpTestInline", "RegExpMatchFast", "RegExpMatchFastGlobal", "StringReplace", "StringReplaceRegExp", "StringReplaceString", "StringIndexOf", "StringCharCodeAt", "StringCodePointAt", "StringCharAt", "StringFromCharCode", "CompareLess", "CompareLessEq", "CompareGreater", "CompareGreaterEq", "CompareBelow", "CompareBelowEq", "CompareEq", "CompareStrictEq", "CompareEqPtr", "SameValue", "Call", "DirectCall", "Construct", "DirectConstruct", "CallVarargs", "CallForwardVarargs", "ConstructVarargs", "ConstructForwardVarargs", "TailCallInlinedCaller", "DirectTailCallInlinedCaller", "TailCallVarargsInlinedCaller", "TailCallForwardVarargsInlinedCaller", "CallDirectEval", "CallWasm", "CallCustomAccessorGetter", "CallCustomAccessorSetter", "LogShadowChickenPrologue", "LogShadowChickenTail", "NewObject", "NewGenerator", "NewAsyncGenerator", "NewArray", "NewArrayWithSpread", "NewArrayWithSpecies", "NewArrayWithSize", "NewArrayWithConstantSize", "NewArrayBuffer", "NewInternalFieldObject", "NewTypedArray", "NewRegexp", "NewSymbol", "NewStringObject", "NewMap", "NewSet", "GetRestLength", "CreateRest", "Spread", "PhantomNewObject", "PutHint", "CheckStructureImmediate", "MaterializeNewObject", "PhantomNewFunction", "PhantomNewGeneratorFunction", "PhantomNewAsyncFunction", "PhantomNewAsyncGeneratorFunction", "PhantomNewInternalFieldObject", "MaterializeNewInternalFieldObject", "PhantomCreateActivation", "MaterializeCreateActivation", "PhantomNewRegexp", "OverridesHasInstance", "InstanceOf", "InstanceOfMegamorphic", "InstanceOfCustom", "MatchStructure", "IsCellWithType", "IsEmpty", "IsEmptyStorage", "HasStructureWithFlags", "TypeOfIsUndefined", "TypeOfIsObject", "TypeOfIsFunction", "IsUndefinedOrNull", "IsBoolean", "IsNumber", "IsBigInt", "GlobalIsNaN", "NumberIsNaN", "NumberIsInteger", "IsObject", "IsCallable", "IsConstructor", "IsTypedArrayView", "TypeOf", "ToBoolean", "LogicalNot", "ToPrimitive", "ToPropertyKey", "ToPropertyKeyOrNumber", "ToString", "ToNumber", "ToNumeric", "ToObject", "ToIntegerOrInfinity", "ToLength", "CallObjectConstructor", "CallStringConstructor", "CallNumberConstructor", "NumberToStringWithRadix", "NumberToStringWithValidRadixConstant", "FunctionToString", "FunctionBind", "MakeRope", "MakeAtomString", "InByVal", "InByValMegamorphic", "InById", "InByIdMegamorphic", "HasPrivateName", "HasPrivateBrand", "ProfileType", "ProfileControlFlow", "SetFunctionName", "HasOwnProperty", "GetInternalField", "PutInternalField", "CreateActivation", "PushWithScope", "CreateDirectArguments", "PhantomDirectArguments", "PhantomCreateRest", "PhantomSpread", "PhantomNewArrayWithSpread", "PhantomNewArrayBuffer", "CreateScopedArguments", "CreateClonedArguments", "PhantomClonedArguments", "GetFromArguments", "PutToArguments", "GetArgument", "NewFunction", "NewGeneratorFunction", "NewAsyncGeneratorFunction", "NewAsyncFunction", "NewBoundFunction", "Jump", "Branch", "Switch", "EntrySwitch", "Return", "TailCall", "DirectTailCall", "TailCallVarargs", "TailCallForwardVarargs", "Unreachable", "Throw", "ThrowStaticError", "CountExecution", "SuperSamplerBegin", "SuperSamplerEnd", "ForceOSRExit", "BottomValue", "CheckTraps", "StoreBarrier", "FencedStoreBarrier", "HasIndexedProperty", "GetPropertyEnumerator", "EnumeratorNextUpdateIndexAndMode", "EnumeratorNextUpdatePropertyName", "EnumeratorGetByVal", "EnumeratorInByVal", "EnumeratorHasOwnProperty", "EnumeratorPutByVal", "MapHash", "NormalizeMapKey", "MapGet", "LoadMapValue", "MapIteratorNext", "MapIteratorKey", "MapIteratorValue", "MapStorage", "MapIterationNext", "MapIterationEntry", "MapIterationEntryKey", "MapIterationEntryValue", "SetAdd", "MapSet", "MapOrSetDelete", "WeakMapGet", "WeakSetAdd", "WeakMapSet", "ExtractValueFromWeakMapGet", "StringValueOf", "StringSlice", "StringSubstring", "StringLocaleCompare", "ToLowerCase", "CallDOMGetter", "CallDOM", "InitializeEntrypointArguments", "CPUIntrinsic", "FilterCallLinkStatus", "FilterGetByStatus", "FilterInByStatus", "FilterPutByStatus", "FilterDeleteByStatus", "FilterCheckPrivateBrandStatus", "FilterSetPrivateBrandStatus", "DataViewGetInt", "DataViewGetFloat", "DataViewSet", "DateGetInt32OrNaN", "DateGetTime", "DateSetTime"]
    private var beginIR = 0
    // Markov corpus requires an evaluator that tracks edge coverage
    // Thus, the corpus object keeps a reference to the evaluator, in order to only downcast once
    private var covEvaluator: ProgramCoverageEvaluator

    // Rate at which selected samples will be included, to promote diversity between instances
    // Equivalent to 1 - dropoutRate
    private var dropoutRate: Double

    // The scheduler will initially selectd the 1 / desiredSelectionProportion samples with the least frequent
    // edge hits in each round, before dropout is applied
    private let desiredSelectionProportion = 8

    private var IR_queue_num = 0

    public init(covEvaluator: ProgramCoverageEvaluator, dropoutRate: Double) {
        self.dropoutRate = dropoutRate
        covEvaluator.enableEdgeTracking()
        self.covEvaluator = covEvaluator
        self.currentProg = Program()
        self.programs = RingBuffer(maxSize: maxSize)
        self.disprograms = RingBuffer(maxSize: maxSize)
        self.ages = RingBuffer(maxSize: maxSize)
        super.init(name: "MarkovCorpus")
    }

    override func initialize() {
        assert(covEvaluator === fuzzer.evaluator as! ProgramCoverageEvaluator)
        if !fuzzer.config.staticCorpus {
            fuzzer.timers.scheduleTask(every: 30 * Minutes, cleanup)
            fuzzer.timers.scheduleTask(every: 4 * 60 * Minutes, mycleanup)
            fuzzer.timers.scheduleTask(every: 1 * 60 * Minutes, printIR)
            fuzzer.timers.scheduleTask(every: 18 * 60 * Minutes, switchMode) // origin interval: 8 hours, new interval: 2 hours from code test
        }
    }

    public func addMyProgram(_ program: Program, _ aspects: ProgramAspects) {
        guard program.size > 0 else { return }

        guard let origCov = aspects as? IREdgeSet else {
            logger.fatal("Markov Corpus needs to be provided a IREdgeSet when adding a program")
        }
        prepareProgramForInclusion(program, index: self.size2)
        allIncludedPrograms.append(program)
        program.origin = Int(origCov.IRID)

        //edgeMap[origCov.IRID] = program
        if edgeMap[origCov.IRID] == nil {
            edgeMap[origCov.IRID] = []
            IR_queue_num += 1
        }

        if ageMap[origCov.IRID] == nil {
            ageMap[origCov.IRID] = []
        }
        let current_count = Int(edgeMap[origCov.IRID]?.count ?? 0)
        if current_count < 30 {
            edgeMap[origCov.IRID]?.append(program)
            ageMap[origCov.IRID]?.append(0)
        }
        
    }

    public func add(_ program: Program, _ aspects: ProgramAspects) {
        if program.size > 0 {
            prepareProgramForInclusion(program, index: programs.count)
            programs.append(program)
            ages.append(0)
        }
    }

    public func addDisProgram(_ program: Program) {
        if program.size > 0 {
            prepareProgramForInclusion(program, index: disprograms.count)
            disprograms.append(program)
        }
    }

    /// Split evenly between programs in the current queue and all programs available to the corpus
    public func randomElementForSplicing() -> Program {
        if beginIR == 1 {
            let idx = Int.random(in: 0..<100)
            if idx < 45 {
                let idx2 = Int.random(in: 0..<programs.count)
                let program = programs[idx2]
                assert(!program.isEmpty)
                return program
            }
            else {
                var prog = programExecutionQueue.randomElement()
                if prog == nil || probability(0.5) {
                    prog = allIncludedPrograms.randomElement()
                }
                assert(prog != nil && prog!.size > 0)
                return prog!
            }
        }
        else {
           let idx2 = Int.random(in: 0..<programs.count)
            let program = programs[idx2]
            assert(!program.isEmpty)
            return program 
        }
        
        
    }

    /// For the first 250 executions, randomly choose a program. This is done to build a base list of edge counts
    /// Once that base is acquired, provide samples that trigger an infrequently hit edge
    public func randomElementForMutating() -> Program {
        if beginIR == 0 {
            let idx2 = Int.random(in: 0..<programs.count)
            ages[idx2] += 1
            let program = programs[idx2]
            assert(!program.isEmpty)
            return program
        }
        else {
            totalExecs += 1
            let idx = Int.random(in: 0..<100)
            if idx < 45 {
                let idx2 = Int.random(in: 0..<programs.count)
                ages[idx2] += 1
                let program = programs[idx2]
                assert(!program.isEmpty)
                return program
            }
            /*
            else if idx < 65 && disprograms.count > 0 {
                let idx3 = Int.random(in: 0..<disprograms.count)
                let program = disprograms[idx3]
                assert(!program.isEmpty)
                return program
            }
            */
            else {
                if programExecutionQueue.isEmpty {
                    regenProgramList()
                }
                if remainingEnergy > 0 {
                    remainingEnergy -= 1
                } else {
                    remainingEnergy = energyBase()
                    currentProg = programExecutionQueue.popLast()!
                }
                //print("select path seed from queue")
                return currentProg
            }
        }
        
        // Only do computationally expensive work choosing the next program when there is a solid
        // baseline of execution data. The data tracked in the statistics module is not used, as modules are intended
        // to not be required for the fuzzer to function.
        /*
        if totalExecs > 250 {
            // Check if more programs are needed
            if programExecutionQueue.isEmpty {
                regenProgramList()
            }
            if remainingEnergy > 0 {
                remainingEnergy -= 1
            } else {
                remainingEnergy = energyBase()
                currentProg = programExecutionQueue.popLast()!
            }
            return currentProg
        } else {
            return allIncludedPrograms.randomElement()!
        }
        */
    }

    private func regenProgramList() {
        if programExecutionQueue.count != 0 {
            logger.fatal("Attempted to generate execution list while it still has programs")
        }
        let edgeCounts = covEvaluator.getIRHitCounts()
        let edgeCountsSorted = edgeCounts.sorted()

        // Find the edge with the smallest count
        var startIndex = -1
        for (i, val) in edgeCountsSorted.enumerated() {
            if val != 0 {
                startIndex = i
                break
            }
        }
        if startIndex == -1 {
            logger.fatal("No edges found in edge count")
        }

        // Find the nth interesting edge's count
        let desiredEdgeCount = max(IR_queue_num / 4, 30)
        let endIndex = min(startIndex + desiredEdgeCount, edgeCountsSorted.count - 1)
        let maxEdgeCountToFind = edgeCountsSorted[endIndex]
        logger.info("select seed from MarkovCorpus")
        logger.info("startIndex: \(startIndex)")
        logger.info("endIndex: \(endIndex)")
        logger.info("maxEdgeCountToFind: \(maxEdgeCountToFind)")
        // Find the n edges with counts <= maxEdgeCountToFind.
        for (i, val) in edgeCounts.enumerated() {
            // Applies dropout on otherwise valid samples, to ensure variety between instances
            // This will likely select some samples multiple times, which is acceptable as
            // it is proportional to how many infrquently hit edges the sample has
            if i >= (300 + DFGIR_list.count) {
                break
            }
            if val != 0 && val <= maxEdgeCountToFind && (probability(1 - dropoutRate) || programExecutionQueue.isEmpty) {
                let current_queue_count = Int(edgeMap[UInt32(i)]?.count ?? 0)
                if current_queue_count == 0 {
                    continue
                    //logger.fatal("BC queue count is empty")
                }
                let my_id = Int.random(in: 0..<current_queue_count)
                if let prog = edgeMap[UInt32(i)]?[my_id] {
                    programExecutionQueue.append(prog)
                    ageMap[UInt32(i)]?[my_id] += 1
                    if i < 300 {
                        logger.info("\(IR_list[i])")
                    }
                    else {
                        logger.info("\(DFGIR_list[i - 300])")
                    }
                }
                /*if let prog = edgeMap[UInt32(i)]?.randomElement() {   }*/
            }
            
        }

        // Determine how many edges have been leaked and produce a warning if over 1% of total edges
        // Done as second pass for code clarity
        // Testing on v8 shows that < 0.01% of total edges are leaked
        // Potential causes:
        //  - Libcoverage iterates over the edge map twice, once for new coverage, and once for edge counts.
        //      This occurs while the target JS engine is running, so the coverage may be slightly different between the passes
        //      However, this is unlikely to be useful coverage for the purposes of Fuzzilli
        //  - Crashing samples may find new coverage and thus increment counters, but are not added to the corpus
        /*
        var missingEdgeCount = 0
        for (i, val) in edgeCounts.enumerated() {
            if val != 0 && edgeMap[UInt32(i)] == nil {
                missingEdgeCount += 1
            }
            if i > (300 + DFGIR_list.count) {
                break
            }
        }
        if missingEdgeCount > ((300 + DFGIR_list.count) / 10) {
            let missingPercentage = Double(missingEdgeCount) / Double(300 + DFGIR_list.count) * 100.0
            logger.warning("\(missingPercentage)% of total IRs have been leaked")
        }
        */

        if programExecutionQueue.count == 0 {
            logger.fatal("Program regeneration failed")
        }
        logger.info("Markov Corpus selected \(programExecutionQueue.count) new programs")
    }

    public var size: Int {
        return programs.count
    }

    public var size2: Int {
        return allIncludedPrograms.count
    }

    public var size3: Int {
        return disprograms.count
    }

    public var isEmpty: Bool {
        return size == 0
    }

    public subscript(index: Int) -> Program {
        return allIncludedPrograms[index]
    }

    public func allPrograms() -> [Program] {
        return allIncludedPrograms
    }

    public func printIR() {
        guard let covEvaluator = fuzzer.evaluator as? ProgramCoverageEvaluator else {
            logger.fatal("Basic Corpus needs to be provided a CoverageEvaluator")
        }
        let irCounts = covEvaluator.getIRHitCounts()

        for i in 0..<IR_list.count {
            logger.info("[\(fuzzer.id) Corpus Size: \(edgeMap[UInt32(i)]?.count ?? 0)] Bytecode test for \(IR_list[i]): \(irCounts[i]) ")
        }

        for i in 0..<DFGIR_list.count {
            logger.info("[\(fuzzer.id) Corpus Size: \(edgeMap[UInt32(i + 300)]?.count ?? 0)] DFG IR test for \(DFGIR_list[i]): \(irCounts[i + 300]) ")
        }
    }

    private func mycleanup() {
        let uplimit = 300 + DFGIR_list.count
        for q in 0..<uplimit {
            var newPrograms: [Program] = [] // 30 seeds for a bc queue
            var newAges: [Int] = []
            let current_count = Int(edgeMap[UInt32(q)]?.count ?? 0)
            if current_count == 0 {
                continue
            }

            for i in 0..<current_count {
                let remaining = current_count - i
                if Int(ageMap[UInt32(q)]?[i] ?? 0) < minMutationsPerSample || remaining <= (6 - newPrograms.count) { // min queue size: 6
                    if edgeMap[UInt32(q)] == nil {
                        logger.fatal("BC \(i) corpus is empty in clean up")
                    }
                    newPrograms.append(edgeMap[UInt32(q)]?[i] ?? Program() )
                    newAges.append(ageMap[UInt32(q)]?[i] ?? 0)
                }
            }
            logger.info("BC Corpus \(q) cleanup finished: \(current_count) -> \(newPrograms.count)")
            edgeMap[UInt32(q)] = newPrograms
            ageMap[UInt32(q)] = newAges
        }
    }

    private func cleanup() {
        var newPrograms = RingBuffer<Program>(maxSize: programs.maxSize)
        var newAges = RingBuffer<Int>(maxSize: ages.maxSize)

        for i in 0..<programs.count {
            let remaining = programs.count - i
            if ages[i] < minMutationsPerSample || remaining <= (minSize - newPrograms.count) {
                newPrograms.append(programs[i])
                newAges.append(ages[i])
            }
        }

        logger.info("Edge Corpus cleanup finished: \(self.programs.count) -> \(newPrograms.count)")
        programs = newPrograms
        ages = newAges
    }

    

    private func switchMode() {
        if beginIR == 0 {
            beginIR = 1
        }
    }


    // We don't currently support fast state synchronization.
    // Instead, we need to import every sample separately (potentially
    // multiple times for determinism) to determine the edges it triggers.
    public var supportsFastStateSynchronization: Bool {
        return true
    }

    // Note that this exports all programs, but does not include edge counts
    /*
    public func exportState() throws -> Data {
        fatalError("Not Supported")
    }

    public func importState(_ buffer: Data) throws {
        fatalError("Not Supported")
    }
    */

    public func addInternal(_ program: Program) {
        if program.size > 0 {
            prepareProgramForInclusion(program, index: self.size2)
            programs.append(program)
            ages.append(0)

            //totalEntryCounter += 1
        }
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

    // Ramp up the number of times a sample is used as the initial seed over time
    private func energyBase() -> UInt32 {
        return UInt32(Foundation.log10(Float(totalExecs))) + 1
    }
}
