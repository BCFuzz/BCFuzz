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

/// The building blocks of FuzzIL code.
///
/// An instruction is an operation together with in- and output variables.
public struct Instruction {
    /// The operation performed by this instruction.
    public let op: Operation
    public var line = 0
    public var is_target = 0

    /// The input and output variables of this instruction.
    ///
    /// Format:
    ///      First numInputs Variables: inputs
    ///      Next numOutputs Variables: outputs visible in the outer scope
    ///      Next numInnerOutputs Variables: outputs only visible in the inner scope created by this instruction
    ///      Final value, if present: the index of this instruction in the code object it belongs to
    private let inouts_: [Variable]


    /// The number of input variables of this instruction.
    public var numInputs: Int {
        return op.numInputs
    }

    /// The number of output variables of this instruction.
    public var numOutputs: Int {
        return op.numOutputs
    }

    /// The number of output variables of this instruction that are visible in the inner scope (if this is a block begin).
    public var numInnerOutputs: Int {
        return op.numInnerOutputs
    }

    /// The total number of inputs and outputs of this instruction.
    public var numInouts: Int {
        return numInputs + numOutputs + numInnerOutputs
    }

    /// Whether this instruction has any inputs.
    public var hasInputs: Bool {
        return numInputs > 0
    }

    /// Returns the ith input variable.
    public func input(_ i: Int) -> Variable {
        assert(i < numInputs)
        return inouts_[i]
    }

    /// The input variables of this instruction.
    public var inputs: ArraySlice<Variable> {
        return inouts_[..<numInputs]
    }

    /// All variadic inputs of this instruction.
    public var variadicInputs: ArraySlice<Variable> {
        return inouts_[firstVariadicInput..<numInputs]
    }

    /// The index of the first variadic input of this instruction.
    public var firstVariadicInput: Int {
        return op.firstVariadicInput
    }

    /// Whether this instruction has any variadic inputs.
    public var hasAnyVariadicInputs: Bool {
        return firstVariadicInput < numInputs
    }

    /// Whether this instruction has any outputs.
    public var hasOutputs: Bool {
        return numOutputs + numInnerOutputs > 0
    }

    /// Whether this instruction has exaclty one output.
    public var hasOneOutput: Bool {
        return numOutputs == 1
    }

    /// Convenience getter for simple operations that produce a single output variable.
    public var output: Variable {
        assert(hasOneOutput)
        return inouts_[numInputs]
    }

    /// Convenience getter for simple operations that produce a single inner output variable.
    public var innerOutput: Variable {
        assert(numInnerOutputs == 1)
        return inouts_[numInputs + numOutputs]
    }

    /// The output variables of this instruction in the surrounding scope.
    public var outputs: ArraySlice<Variable> {
        return inouts_[numInputs ..< numInputs + numOutputs]
    }

    /// The output variables of this instruction that are only visible in the inner scope.
    public var innerOutputs: ArraySlice<Variable> {
        return inouts_[numInputs + numOutputs ..< numInouts]
    }

    public func innerOutput(_ i: Int) -> Variable {
        return inouts_[numInputs + numOutputs + i]
    }

    public func innerOutputs(_ r: PartialRangeFrom<Int>) -> ArraySlice<Variable> {
        return inouts_[numInputs + numOutputs + r.lowerBound ..< numInouts]
    }

    /// The inner and outer output variables of this instruction combined.
    public var allOutputs: ArraySlice<Variable> {
        return inouts_[numInputs ..< numInouts]
    }

    /// All inputs and outputs of this instruction combined.
    public var inouts: ArraySlice<Variable> {
        return inouts_[..<numInouts]
    }

    /// Whether this instruction contains its index in the code it belongs to.
    public var hasIndex: Bool {
        // If the index is present, it is the last value in inouts. See comment in index getter.
        return inouts_.count == numInouts + 1
    }

    /// The index of this instruction in the Code it belongs to.
    public var index: Int {
        // We store the index in the internal inouts array for memory efficiency reasons.
        // In practice, this does not limit the size of programs/code since that's already
        // limited by the fact that variables are UInt16 internally.
        assert(hasIndex)
        return Int(inouts_.last!.number)
    }

    ///
    /// Flag accessors.
    ///

    /// A pure operation returns the same value given the same inputs and has no side effects.
    public var isPure: Bool {
        return op.attributes.contains(.isPure)
    }

    /// True if the operation of this instruction be mutated in a meaningful way.
    /// An instruction with inputs is always mutable. This only indicates whether the operation can be mutated.
    /// See Operation.Attributes.isMutable
    public var isOperationMutable: Bool {
        return op.attributes.contains(.isMutable)
    }

    /// A simple instruction is not a block instruction.
    public var isSimple: Bool {
        return !isBlock
    }

    /// An instruction that performs a procedure call.
    /// See Operation.Attributes.isCall
    public var isCall: Bool {
        return op.attributes.contains(.isCall)
    }

    /// An operation is variadic if it can have a variable number of inputs.
    /// See Operation.Attributes.isVariadic
    public var isVariadic: Bool {
        return op.attributes.contains(.isVariadic)
    }

    /// An operation is singular if there must only be one of its kind in its surrounding block.
    /// See Operation.Attributes.isSingular.
    public var isSingular: Bool {
        return op.attributes.contains(.isSingular)
    }

    /// A block instruction is part of a block in the program.
    public var isBlock: Bool {
        return isBlockStart || isBlockEnd
    }

    /// Whether this instruction is the start of a block.
    /// See Operation.Attributes.isBlockStart.
    public var isBlockStart: Bool {
        return op.attributes.contains(.isBlockStart)
    }

    /// Whether this instruction is the end of a block.
    /// See Operation.Attributes.isBlockEnd.
    public var isBlockEnd: Bool {
        return op.attributes.contains(.isBlockEnd)
    }

    /// Whether this instruction is the start of a block group (so a block start but not a block end).
    public var isBlockGroupStart: Bool {
        return isBlockStart && !isBlockEnd
    }

    /// Whether this instruction is the end of a block group (so a block end but not also a block start).
    public var isBlockGroupEnd: Bool {
        return isBlockEnd && !isBlockStart
    }

    /// Whether this instruction is a jump.
    /// See See Operation.Attributes.isJump.
    public var isJump: Bool {
        return op.attributes.contains(.isJump)
    }

    /// Whether this block start instruction propagates the outer context into the newly started block.
    /// See Operation.Attributes.propagatesSurroundingContext.
    public var propagatesSurroundingContext: Bool {
        assert(isBlockStart)
        return op.attributes.contains(.propagatesSurroundingContext)
    }

    /// Whether this instruction skips the last context and resumes the
    /// ContextAnalysis from the second last context stack, this is useful for
    /// BeginSwitch/EndSwitch Blocks. See BeginSwitchCase.
    public var skipsSurroundingContext: Bool {
        assert(isBlockStart)
        return op.attributes.contains(.resumesSurroundingContext)
    }

    /// Whether this instruction's operation is a GuardableOperations _and_ the guarding is active.
    /// Guarded operations "swallow" runtime exceptions, for example by wrapping them into a try-catch during lifting.
    public var isGuarded: Bool {
        return (op as? GuardableOperation)?.isGuarded ?? false
    }

    /// Whether this instruction is an internal instruction that should not "leak" into
    /// the corpus or generally out of the component that generated it.
    public var isInternal: Bool {
        return op.attributes.contains(.isInternal)
    }

    /// Whether this instruction is a Nop instruction.
    public var isNop: Bool {
        return op.attributes.contains(.isNop)
    }


    public init<Variables: Collection>(_ op: Operation, inouts: Variables, index: Int? = nil) where Variables.Element == Variable {
        assert(op.numInputs + op.numOutputs + op.numInnerOutputs == inouts.count)
        self.op = op
        var inouts_ = Array(inouts)
        if let idx = index {
            inouts_.append(Variable(number: idx))
        }
        self.inouts_ = inouts_
    }

    public init(_ op: Operation, output: Variable) {
        assert(op.numInputs == 0 && op.numOutputs == 1 && op.numInnerOutputs == 0)
        self.init(op, inouts: [output])
    }

    public init(_ op: Operation, output: Variable, inputs: [Variable]) {
        assert(op.numOutputs == 1)
        assert(op.numInnerOutputs == 0)
        assert(op.numInputs == inputs.count)
        self.init(op, inouts: inputs + [output])
    }

    public init(_ op: Operation, inputs: [Variable]) {
        assert(op.numOutputs + op.numInnerOutputs == 0)
        assert(op.numInputs == inputs.count)
        self.init(op, inouts: inputs)
    }

    public init(_ op: Operation, innerOutput: Variable) {
        assert(op.numInnerOutputs == 1)
        assert(op.numOutputs == 0)
        assert(op.numInputs == 0)
        self.init(op, inouts: [innerOutput])
    }

    public init(_ op: Operation) {
        assert(op.numOutputs + op.numInnerOutputs == 0)
        assert(op.numInputs == 0)
        self.init(op, inouts: [])
    }
}

// Protobuf support.
//
// The protobuf conversion for operations is implemented here. The main reason for
// that is that operations cannot generally be decoded without knowledge of the
// instruction they occur in, as the number of in/outputs is only encoded once,
// in the instruction. For example, the CreateArray protobuf does not contain the
// number of initial array elements - that infomation is only captured once, in the
// inouts of the owning instruction.
extension Instruction: ProtobufConvertible {
    typealias ProtobufType = Fuzzilli_Protobuf_Instruction

    func asProtobuf(labelableOperationCounter: inout UInt64, with opCache: OperationCache?) -> ProtobufType {
        func convertEnum<S: Equatable, P: RawRepresentable>(_ s: S, _ allValues: [S]) -> P where P.RawValue == Int {
            return P(rawValue: allValues.firstIndex(of: s)!)!
        }

        func convertParameters(_ parameters: Parameters) -> Fuzzilli_Protobuf_Parameters {
            return Fuzzilli_Protobuf_Parameters.with {
                $0.count = UInt32(parameters.count)
                $0.hasRest_p = parameters.hasRestParameter
            }
        }

        let result = ProtobufType.with {
            $0.inouts = inouts.map({ UInt32($0.number) })

            // First see if we can use the cache.
            if let idx = opCache?.get(op) {
                $0.opIdx = UInt32(idx)
                return
            }

            // Dedicated switch for processing LabelableOperation
            switch op.opcode {
            case .beginWith(let op as LabelableOperation),
                 .beginWhileLoopBody(let op as LabelableOperation),
                 .beginDoWhileLoopBody(let op as LabelableOperation),
                 .beginForLoopBody(let op as LabelableOperation),
                 .beginForInLoop(let op as LabelableOperation),
                 .beginForOfLoop(let op as LabelableOperation),
                 .beginForOfLoopWithDestruct(let op as LabelableOperation),
                 .beginRepeatLoop(let op as LabelableOperation),
                 .beginBlockStatement(let op as LabelableOperation),
                 .beginSwitch(let op as LabelableOperation):
                labelableOperationCounter += 1
                op.label.ID = labelableOperationCounter
            default:
                break
            }

            // Otherwise, encode the operation.
            switch op.opcode {
            case .nop:
                $0.nop = Fuzzilli_Protobuf_Nop()
            case .loadInteger(let op):
                $0.loadInteger = Fuzzilli_Protobuf_LoadInteger.with { $0.value = op.value }
            case .loadBigInt(let op):
                $0.loadBigInt = Fuzzilli_Protobuf_LoadBigInt.with { $0.value = op.value }
            case .loadFloat(let op):
                $0.loadFloat = Fuzzilli_Protobuf_LoadFloat.with { $0.value = op.value }
            case .loadString(let op):
                $0.loadString = Fuzzilli_Protobuf_LoadString.with { $0.value = op.value }
            case .loadBoolean(let op):
                $0.loadBoolean = Fuzzilli_Protobuf_LoadBoolean.with { $0.value = op.value }
            case .loadUndefined:
                $0.loadUndefined = Fuzzilli_Protobuf_LoadUndefined()
            case .loadNull:
                $0.loadNull = Fuzzilli_Protobuf_LoadNull()
            case .loadThis:
                $0.loadThis = Fuzzilli_Protobuf_LoadThis()
            case .loadArguments:
                $0.loadArguments = Fuzzilli_Protobuf_LoadArguments()
            case .loadRegExp(let op):
                $0.loadRegExp = Fuzzilli_Protobuf_LoadRegExp.with { $0.pattern = op.pattern; $0.flags = op.flags.rawValue }
            case .beginObjectLiteral:
                $0.beginObjectLiteral = Fuzzilli_Protobuf_BeginObjectLiteral()
            case .objectLiteralAddStringProperty(let op):
                $0.objectLiteralAddStringProperty = Fuzzilli_Protobuf_ObjectLiteralAddStringProperty.with { $0.propertyName = op.propertyName }
            case .objectLiteralAddNumericProperty(let op):
                $0.objectLiteralAddNumericProperty = Fuzzilli_Protobuf_ObjectLiteralAddNumericProperty.with { $0.propertyName = op.propertyName }
            case .objectLiteralAddComputedProperty:
                $0.objectLiteralAddComputedProperty = Fuzzilli_Protobuf_ObjectLiteralAddComputedProperty()
            case .objectLiteralAddElement(let op):
                $0.objectLiteralAddElement = Fuzzilli_Protobuf_ObjectLiteralAddElement.with { $0.index = op.index }
            case .objectLiteralCopyProperties:
                $0.objectLiteralCopyProperties = Fuzzilli_Protobuf_ObjectLiteralCopyProperties()
            case .objectLiteralSetPrototype:
                $0.objectLiteralSetPrototype = Fuzzilli_Protobuf_ObjectLiteralSetPrototype()
            case .beginObjectLiteralStringMethod(let op):
                $0.beginObjectLiteralStringMethod = Fuzzilli_Protobuf_BeginObjectLiteralStringMethod.with {
                    $0.methodName = op.methodName
                    $0.isAsync = op.isAsync
                    $0.parameters = convertParameters(op.parameters)
                }
            case .beginObjectLiteralNumericMethod(let op):
                $0.beginObjectLiteralNumericMethod = Fuzzilli_Protobuf_BeginObjectLiteralNumericMethod.with {
                    $0.methodName = op.methodName
                    $0.isAsync = op.isAsync
                    $0.parameters = convertParameters(op.parameters)
                }
            case .beginObjectLiteralComputedMethod(let op):
                $0.beginObjectLiteralComputedMethod = Fuzzilli_Protobuf_BeginObjectLiteralComputedMethod.with {
                    $0.parameters = convertParameters(op.parameters)
                    $0.isAsync = op.isAsync
                }
            case .endObjectLiteralMethod:
                $0.endObjectLiteralMethod = Fuzzilli_Protobuf_EndObjectLiteralMethod()
            case .beginObjectLiteralStringGetter(let op):
                $0.beginObjectLiteralStringGetter = Fuzzilli_Protobuf_BeginObjectLiteralStringGetter.with { $0.propertyName = op.propertyName }
            case .beginObjectLiteralComputedGetter:
                $0.beginObjectLiteralComputedGetter = Fuzzilli_Protobuf_BeginObjectLiteralComputedGetter()
            case .beginObjectLiteralNumericGetter(let op):
                $0.beginObjectLiteralNumericGetter = Fuzzilli_Protobuf_BeginObjectLiteralNumericGetter.with { $0.propertyName = op.propertyName }
            case .endObjectLiteralGetter:
                $0.endObjectLiteralGetter = Fuzzilli_Protobuf_EndObjectLiteralGetter()
            case .beginObjectLiteralStringSetter(let op):
                $0.beginObjectLiteralStringSetter = Fuzzilli_Protobuf_BeginObjectLiteralStringSetter.with { $0.propertyName = op.propertyName }
            case .beginObjectLiteralComputedSetter:
                $0.beginObjectLiteralComputedSetter = Fuzzilli_Protobuf_BeginObjectLiteralComputedSetter()
            case .beginObjectLiteralNumericSetter(let op):
                $0.beginObjectLiteralNumericSetter = Fuzzilli_Protobuf_BeginObjectLiteralNumericSetter.with { $0.propertyName = op.propertyName }
            case .endObjectLiteralSetter:
                $0.endObjectLiteralSetter = Fuzzilli_Protobuf_EndObjectLiteralSetter()
            case .endObjectLiteral:
                $0.endObjectLiteral = Fuzzilli_Protobuf_EndObjectLiteral()
            case .beginClassDefinition(let op):
                $0.beginClassDefinition = Fuzzilli_Protobuf_BeginClassDefinition.with { $0.hasSuperclass_p = op.hasSuperclass }
            case .beginClassConstructor(let op):
                $0.beginClassConstructor = Fuzzilli_Protobuf_BeginClassConstructor.with { $0.parameters = convertParameters(op.parameters) }
            case .endClassConstructor:
                $0.endClassConstructor = Fuzzilli_Protobuf_EndClassConstructor()
            case .classAddInstanceProperty(let op):
                $0.classAddInstanceProperty = Fuzzilli_Protobuf_ClassAddInstanceProperty.with {
                    $0.propertyName = op.propertyName
                    $0.hasValue_p = op.hasValue
                }
            case .classAddInstanceElement(let op):
                $0.classAddInstanceElement = Fuzzilli_Protobuf_ClassAddInstanceElement.with {
                    $0.index = op.index
                    $0.hasValue_p = op.hasValue
                }
            case .classAddInstanceComputedProperty(let op):
                $0.classAddInstanceComputedProperty = Fuzzilli_Protobuf_ClassAddInstanceComputedProperty.with { $0.hasValue_p = op.hasValue }
            case .beginClassInstanceStringMethod(let op):
                $0.beginClassInstanceStringMethod = Fuzzilli_Protobuf_BeginClassInstanceStringMethod.with {
                    $0.methodName = op.methodName
                    $0.parameters = convertParameters(op.parameters)
                }
            case .beginClassInstanceComputedMethod(let op):
                $0.beginClassInstanceComputedMethod = Fuzzilli_Protobuf_BeginClassInstanceComputedMethod.with {
                    $0.parameters = convertParameters(op.parameters)
                }
            case .beginClassInstanceNumericMethod(let op):
                $0.beginClassInstanceNumericMethod = Fuzzilli_Protobuf_BeginClassInstanceNumericMethod.with {
                    $0.methodName = op.methodName
                    $0.parameters = convertParameters(op.parameters)
                }
            case .beginClassInstanceBigIntMethod(let op):
                $0.beginClassInstanceBigIntMethod = Fuzzilli_Protobuf_BeginClassInstanceBigIntMethod.with {
                    $0.methodName = op.methodName
                    $0.parameters = convertParameters(op.parameters)
                }
            case .endClassInstanceMethod:
                $0.endClassInstanceMethod = Fuzzilli_Protobuf_EndClassInstanceMethod()
            case .beginClassInstanceStringGetter(let op):
                $0.beginClassInstanceStringGetter = Fuzzilli_Protobuf_BeginClassInstanceStringGetter.with { $0.propertyName = op.propertyName }
            case .beginClassInstanceComputedGetter:
                $0.beginClassInstanceComputedGetter = Fuzzilli_Protobuf_BeginClassInstanceComputedGetter()
            case .beginClassInstanceNumericGetter(let op):
                $0.beginClassInstanceNumericGetter = Fuzzilli_Protobuf_BeginClassInstanceNumericGetter.with { $0.propertyName = op.propertyName }
            case .endClassInstanceGetter:
                $0.endClassInstanceGetter = Fuzzilli_Protobuf_EndClassInstanceGetter()
            case .beginClassInstanceStringSetter(let op):
                $0.beginClassInstanceStringSetter = Fuzzilli_Protobuf_BeginClassInstanceStringSetter.with { $0.propertyName = op.propertyName }
            case .beginClassInstanceComputedSetter:
                $0.beginClassInstanceComputedSetter = Fuzzilli_Protobuf_BeginClassInstanceComputedSetter()
            case .beginClassInstanceNumericSetter(let op):
                $0.beginClassInstanceNumericSetter = Fuzzilli_Protobuf_BeginClassInstanceNumericSetter.with { $0.propertyName = op.propertyName }
            case .endClassInstanceSetter:
                $0.endClassInstanceSetter = Fuzzilli_Protobuf_EndClassInstanceSetter()
            case .classAddStaticProperty(let op):
                $0.classAddStaticProperty = Fuzzilli_Protobuf_ClassAddStaticProperty.with {
                    $0.propertyName = op.propertyName
                    $0.hasValue_p = op.hasValue
                }
            case .classAddStaticElement(let op):
                $0.classAddStaticElement = Fuzzilli_Protobuf_ClassAddStaticElement.with {
                    $0.index = op.index
                    $0.hasValue_p = op.hasValue
                }
            case .classAddStaticComputedProperty(let op):
                $0.classAddStaticComputedProperty = Fuzzilli_Protobuf_ClassAddStaticComputedProperty.with { $0.hasValue_p = op.hasValue }
            case .beginClassStaticInitializer:
                $0.beginClassStaticInitializer = Fuzzilli_Protobuf_BeginClassStaticInitializer()
            case .endClassStaticInitializer:
                $0.endClassStaticInitializer = Fuzzilli_Protobuf_EndClassStaticInitializer()
            case .beginClassStaticStringMethod(let op):
                $0.beginClassStaticStringMethod = Fuzzilli_Protobuf_BeginClassStaticStringMethod.with {
                    $0.methodName = op.methodName
                    $0.parameters = convertParameters(op.parameters)
                }
            case .beginClassStaticComputedMethod(let op):
                $0.beginClassStaticComputedMethod = Fuzzilli_Protobuf_BeginClassStaticComputedMethod.with {
                    $0.parameters = convertParameters(op.parameters)
                }
            case .beginClassStaticNumericMethod(let op):
                $0.beginClassStaticNumericMethod = Fuzzilli_Protobuf_BeginClassStaticNumericMethod.with {
                    $0.methodName = op.methodName
                    $0.parameters = convertParameters(op.parameters)
                }
            case .beginClassStaticBigIntMethod(let op):
                $0.beginClassStaticBigIntMethod = Fuzzilli_Protobuf_BeginClassStaticBigIntMethod.with {
                    $0.methodName = op.methodName
                    $0.parameters = convertParameters(op.parameters)
                }
            case .endClassStaticMethod:
                $0.endClassStaticMethod = Fuzzilli_Protobuf_EndClassStaticMethod()
            case .beginClassStaticStringGetter(let op):
                $0.beginClassStaticStringGetter = Fuzzilli_Protobuf_BeginClassStaticStringGetter.with { $0.propertyName = op.propertyName }
            case .beginClassStaticComputedGetter:
                $0.beginClassStaticComputedGetter = Fuzzilli_Protobuf_BeginClassStaticComputedGetter()
            case .beginClassStaticNumericGetter(let op):
                $0.beginClassStaticNumericGetter = Fuzzilli_Protobuf_BeginClassStaticNumericGetter.with { $0.propertyName = op.propertyName }
            case .endClassStaticGetter:
                $0.endClassStaticGetter = Fuzzilli_Protobuf_EndClassStaticGetter()
            case .beginClassStaticStringSetter(let op):
                $0.beginClassStaticStringSetter = Fuzzilli_Protobuf_BeginClassStaticStringSetter.with { $0.propertyName = op.propertyName }
            case .beginClassStaticComputedSetter:
                $0.beginClassStaticComputedSetter = Fuzzilli_Protobuf_BeginClassStaticComputedSetter()
            case .beginClassStaticNumericSetter(let op):
                $0.beginClassStaticNumericSetter = Fuzzilli_Protobuf_BeginClassStaticNumericSetter.with { $0.propertyName = op.propertyName }
            case .endClassStaticSetter:
                $0.endClassStaticSetter = Fuzzilli_Protobuf_EndClassStaticSetter()
            case .classAddPrivateInstanceProperty(let op):
                $0.classAddPrivateInstanceProperty = Fuzzilli_Protobuf_ClassAddPrivateInstanceProperty.with {
                    $0.propertyName = op.propertyName
                    $0.hasValue_p = op.hasValue
                }
            case .classAddPrivateInstancePropertyWithPrivateInInitializer(let op):
                $0.classAddPrivateInstancePropertyWithPrivateInInitializer = Fuzzilli_Protobuf_ClassAddPrivateInstancePropertyWithPrivateInInitializer.with {
                    $0.propertyName = op.propertyName
                    $0.testInPropertyName = op.testInPropertyName
                    $0.hasCustomInObject_p = op.hasCustomInObject
                }
            case .beginClassPrivateInstanceMethod(let op):
                $0.beginClassPrivateInstanceMethod = Fuzzilli_Protobuf_BeginClassPrivateInstanceMethod.with {
                    $0.methodName = op.methodName
                    $0.parameters = convertParameters(op.parameters)
                }
            case .endClassPrivateInstanceMethod:
                $0.endClassPrivateInstanceMethod = Fuzzilli_Protobuf_EndClassPrivateInstanceMethod()
            case .classAddPrivateStaticProperty(let op):
                $0.classAddPrivateStaticProperty = Fuzzilli_Protobuf_ClassAddPrivateStaticProperty.with {
                    $0.propertyName = op.propertyName
                    $0.hasValue_p = op.hasValue
                }
            case .classAddPrivateStaticPropertyWithPrivateInInitializer(let op):
                $0.classAddPrivateStaticPropertyWithPrivateInInitializer = Fuzzilli_Protobuf_ClassAddPrivateStaticPropertyWithPrivateInInitializer.with {
                    $0.propertyName = op.propertyName
                    $0.testInPropertyName = op.testInPropertyName
                    $0.hasCustomInObject_p = op.hasCustomInObject
                }
            case .beginClassPrivateStaticMethod(let op):
                $0.beginClassPrivateStaticMethod = Fuzzilli_Protobuf_BeginClassPrivateStaticMethod.with {
                    $0.methodName = op.methodName
                    $0.parameters = convertParameters(op.parameters)
                }
            case .endClassPrivateStaticMethod:
                $0.endClassPrivateStaticMethod = Fuzzilli_Protobuf_EndClassPrivateStaticMethod()
            case .endClassDefinition:
                $0.endClassDefinition = Fuzzilli_Protobuf_EndClassDefinition()
            case .createArray:
                $0.createArray = Fuzzilli_Protobuf_CreateArray()
            case .createIntArray(let op):
                $0.createIntArray = Fuzzilli_Protobuf_CreateIntArray.with { $0.values = op.values }
            case .createFloatArray(let op):
                $0.createFloatArray = Fuzzilli_Protobuf_CreateFloatArray.with { $0.values = op.values }
            case .createArrayWithSpread(let op):
                $0.createArrayWithSpread = Fuzzilli_Protobuf_CreateArrayWithSpread.with { $0.spreads = op.spreads }
            case .createTemplateString(let op):
                $0.createTemplateString = Fuzzilli_Protobuf_CreateTemplateString.with { $0.parts = op.parts }
            case .loadBuiltin(let op):
                $0.loadBuiltin = Fuzzilli_Protobuf_LoadBuiltin.with { $0.builtinName = op.builtinName }
            case .getProperty(let op):
                $0.getProperty = Fuzzilli_Protobuf_GetProperty.with {
                    $0.propertyName = op.propertyName
                    $0.isGuarded = op.isGuarded
                }
            case .setProperty(let op):
                $0.setProperty = Fuzzilli_Protobuf_SetProperty.with { $0.propertyName = op.propertyName }
            case .updateProperty(let op):
                $0.updateProperty = Fuzzilli_Protobuf_UpdateProperty.with {
                    $0.propertyName = op.propertyName
                    $0.op = convertEnum(op.op, BinaryOperator.allCases)
                }
            case .deleteProperty(let op):
                $0.deleteProperty = Fuzzilli_Protobuf_DeleteProperty.with {
                    $0.propertyName = op.propertyName
                    $0.isGuarded = op.isGuarded
                }
            case .configureProperty(let op):
                $0.configureProperty = Fuzzilli_Protobuf_ConfigureProperty.with {
                    $0.propertyName = op.propertyName
                    $0.isWritable = op.flags.contains(.writable)
                    $0.isConfigurable = op.flags.contains(.configurable)
                    $0.isEnumerable = op.flags.contains(.enumerable)
                    $0.type = convertEnum(op.type, PropertyType.allCases)
                }
            case .getElement(let op):
                $0.getElement = Fuzzilli_Protobuf_GetElement.with {
                    $0.index = op.index
                    $0.isGuarded = op.isGuarded
                }
            case .setElement(let op):
                $0.setElement = Fuzzilli_Protobuf_SetElement.with { $0.index = op.index }
            case .updateElement(let op):
                $0.updateElement = Fuzzilli_Protobuf_UpdateElement.with {
                    $0.index = op.index
                    $0.op = convertEnum(op.op, BinaryOperator.allCases)
                }
            case .deleteElement(let op):
                $0.deleteElement = Fuzzilli_Protobuf_DeleteElement.with {
                    $0.index = op.index
                    $0.isGuarded = op.isGuarded
                }
            case .configureElement(let op):
                $0.configureElement = Fuzzilli_Protobuf_ConfigureElement.with {
                    $0.index = op.index
                    $0.isWritable = op.flags.contains(.writable)
                    $0.isConfigurable = op.flags.contains(.configurable)
                    $0.isEnumerable = op.flags.contains(.enumerable)
                    $0.type = convertEnum(op.type, PropertyType.allCases)
                }
            case .getComputedProperty(let op):
                $0.getComputedProperty = Fuzzilli_Protobuf_GetComputedProperty.with { $0.isGuarded = op.isGuarded }
            case .setComputedProperty:
                $0.setComputedProperty = Fuzzilli_Protobuf_SetComputedProperty()
            case .updateComputedProperty(let op):
                $0.updateComputedProperty = Fuzzilli_Protobuf_UpdateComputedProperty.with{ $0.op = convertEnum(op.op, BinaryOperator.allCases) }
            case .deleteComputedProperty(let op):
                $0.deleteComputedProperty = Fuzzilli_Protobuf_DeleteComputedProperty.with { $0.isGuarded = op.isGuarded }
            case .configureComputedProperty(let op):
                $0.configureComputedProperty = Fuzzilli_Protobuf_ConfigureComputedProperty.with {
                    $0.isWritable = op.flags.contains(.writable)
                    $0.isConfigurable = op.flags.contains(.configurable)
                    $0.isEnumerable = op.flags.contains(.enumerable)
                    $0.type = convertEnum(op.type, PropertyType.allCases)
                }
            case .typeOf:
                $0.typeOf = Fuzzilli_Protobuf_TypeOf()
            case .testInstanceOf:
                $0.testInstanceOf = Fuzzilli_Protobuf_TestInstanceOf()
            case .testIn:
                $0.testIn = Fuzzilli_Protobuf_TestIn()
            case .testClassPrivateInInMethod(let op):
                $0.testClassPrivateInInMethod = Fuzzilli_Protobuf_TestClassPrivateInInMethod.with {
                    $0.propertyName = op.propertyName
                }
            case .beginPlainFunction(let op):
                $0.beginPlainFunction = Fuzzilli_Protobuf_BeginPlainFunction.with {
                    $0.parameters = convertParameters(op.parameters)
                    $0.isStrict = op.isStrict
                }
            case .endPlainFunction:
                $0.endPlainFunction = Fuzzilli_Protobuf_EndPlainFunction()
            case .beginArrowFunction(let op):
                $0.beginArrowFunction = Fuzzilli_Protobuf_BeginArrowFunction.with {
                    $0.parameters = convertParameters(op.parameters)
                    $0.isStrict = op.isStrict
                }
            case .endArrowFunction:
                $0.endArrowFunction = Fuzzilli_Protobuf_EndArrowFunction()
            case .beginExpressionBodyArrowFunction(let op):
                $0.beginExpressionBodyArrowFunction = Fuzzilli_Protobuf_BeginExpressionBodyArrowFunction.with {
                    $0.parameters = convertParameters(op.parameters)
                    $0.isStrict = op.isStrict
                }
            case .endExpressionBodyArrowFunction:
                $0.endExpressionBodyArrowFunction = Fuzzilli_Protobuf_EndExpressionBodyArrowFunction()
            case .beginGeneratorFunction(let op):
                $0.beginGeneratorFunction = Fuzzilli_Protobuf_BeginGeneratorFunction.with {
                    $0.parameters = convertParameters(op.parameters)
                    $0.isStrict = op.isStrict
                }
            case .endGeneratorFunction:
                $0.endGeneratorFunction = Fuzzilli_Protobuf_EndGeneratorFunction()
            case .beginAsyncFunction(let op):
                $0.beginAsyncFunction = Fuzzilli_Protobuf_BeginAsyncFunction.with {
                    $0.parameters = convertParameters(op.parameters)
                    $0.isStrict = op.isStrict
                }
            case.endAsyncFunction:
                $0.endAsyncFunction = Fuzzilli_Protobuf_EndAsyncFunction()
            case .beginAsyncArrowFunction(let op):
                $0.beginAsyncArrowFunction = Fuzzilli_Protobuf_BeginAsyncArrowFunction.with {
                    $0.parameters = convertParameters(op.parameters)
                    $0.isStrict = op.isStrict
                }
            case .endAsyncArrowFunction:
                $0.endAsyncArrowFunction = Fuzzilli_Protobuf_EndAsyncArrowFunction()
            case .beginAsyncGeneratorFunction(let op):
                $0.beginAsyncGeneratorFunction = Fuzzilli_Protobuf_BeginAsyncGeneratorFunction.with {
                    $0.parameters = convertParameters(op.parameters)
                    $0.isStrict = op.isStrict
                }
            case .endAsyncGeneratorFunction:
                $0.endAsyncGeneratorFunction = Fuzzilli_Protobuf_EndAsyncGeneratorFunction()
            case .beginConstructor(let op):
                $0.beginConstructor = Fuzzilli_Protobuf_BeginConstructor.with {
                    $0.parameters = convertParameters(op.parameters)
                }
            case .endConstructor:
                $0.endConstructor = Fuzzilli_Protobuf_EndConstructor()
            case .return:
                $0.return = Fuzzilli_Protobuf_Return()
            case .yield:
                $0.yield = Fuzzilli_Protobuf_Yield()
            case .yieldEach:
                $0.yieldEach = Fuzzilli_Protobuf_YieldEach()
            case .await:
                $0.await = Fuzzilli_Protobuf_Await()
            case .callFunction(let op):
                $0.callFunction = Fuzzilli_Protobuf_CallFunction.with { $0.isGuarded = op.isGuarded }
            case .callFunctionWithSpread(let op):
                $0.callFunctionWithSpread = Fuzzilli_Protobuf_CallFunctionWithSpread.with {
                    $0.spreads = op.spreads
                    $0.isGuarded = op.isGuarded
                }
            case .construct(let op):
                $0.construct = Fuzzilli_Protobuf_Construct.with { $0.isGuarded = op.isGuarded }
            case .constructWithSpread(let op):
                $0.constructWithSpread = Fuzzilli_Protobuf_ConstructWithSpread.with {
                    $0.spreads = op.spreads
                    $0.isGuarded = op.isGuarded
                }
            case .callMethod(let op):
                $0.callMethod = Fuzzilli_Protobuf_CallMethod.with {
                    $0.methodName = op.methodName
                    $0.isGuarded = op.isGuarded
                }
            case .callMethodWithSpread(let op):
                $0.callMethodWithSpread = Fuzzilli_Protobuf_CallMethodWithSpread.with {
                    $0.methodName = op.methodName
                    $0.spreads = op.spreads
                    $0.isGuarded = op.isGuarded
                }
            case .callComputedMethod(let op):
                $0.callComputedMethod = Fuzzilli_Protobuf_CallComputedMethod.with { $0.isGuarded = op.isGuarded }
            case .callComputedMethodWithSpread(let op):
                $0.callComputedMethodWithSpread = Fuzzilli_Protobuf_CallComputedMethodWithSpread.with {
                    $0.spreads = op.spreads
                    $0.isGuarded = op.isGuarded
                }
            case .unaryOperation(let op):
                $0.unaryOperation = Fuzzilli_Protobuf_UnaryOperation.with { $0.op = convertEnum(op.op, UnaryOperator.allCases) }
            case .binaryOperation(let op):
                $0.binaryOperation = Fuzzilli_Protobuf_BinaryOperation.with { $0.op = convertEnum(op.op, BinaryOperator.allCases) }
            case .ternaryOperation:
                $0.ternaryOperation = Fuzzilli_Protobuf_TernaryOperation()
            case .reassign:
                $0.reassign = Fuzzilli_Protobuf_Reassign()
            case .update(let op):
                $0.update = Fuzzilli_Protobuf_Update.with { $0.op = convertEnum(op.op, BinaryOperator.allCases) }
            case .dup:
                $0.dup = Fuzzilli_Protobuf_Dup()
            case .destructArray(let op):
                $0.destructArray = Fuzzilli_Protobuf_DestructArray.with {
                    $0.indices = op.indices.map({ Int32($0) })
                    $0.lastIsRest = op.lastIsRest
                }
            case .destructArrayAndReassign(let op):
                $0.destructArrayAndReassign = Fuzzilli_Protobuf_DestructArrayAndReassign.with {
                    $0.indices = op.indices.map({ Int32($0) })
                    $0.lastIsRest = op.lastIsRest
                }
            case .destructObject(let op):
                $0.destructObject = Fuzzilli_Protobuf_DestructObject.with {
                    $0.properties = op.properties
                    $0.hasRestElement_p = op.hasRestElement
                }
            case .destructObjectAndReassign(let op):
                $0.destructObjectAndReassign = Fuzzilli_Protobuf_DestructObjectAndReassign.with {
                    $0.properties = op.properties
                    $0.hasRestElement_p = op.hasRestElement
                }
            case .compare(let op):
                $0.compare = Fuzzilli_Protobuf_Compare.with { $0.op = convertEnum(op.op, Comparator.allCases) }
            case .loadNamedVariable(let op):
                $0.loadNamedVariable = Fuzzilli_Protobuf_LoadNamedVariable.with { $0.variableName = op.variableName }
            case .storeNamedVariable(let op):
                $0.storeNamedVariable = Fuzzilli_Protobuf_StoreNamedVariable.with { $0.variableName = op.variableName }
            case .defineNamedVariable(let op):
                $0.defineNamedVariable = Fuzzilli_Protobuf_DefineNamedVariable.with { $0.variableName = op.variableName }
            case .eval(let op):
                $0.eval = Fuzzilli_Protobuf_Eval.with {
                    $0.code = op.code
                    $0.hasOutput_p = op.hasOutput
                }
            case .callSuperConstructor:
                $0.callSuperConstructor = Fuzzilli_Protobuf_CallSuperConstructor()
            case .callSuperMethod(let op):
                $0.callSuperMethod = Fuzzilli_Protobuf_CallSuperMethod.with { $0.methodName = op.methodName }
            case .getPrivateProperty(let op):
                $0.getPrivateProperty = Fuzzilli_Protobuf_GetPrivateProperty.with { $0.propertyName = op.propertyName }
            case .setPrivateProperty(let op):
                $0.setPrivateProperty = Fuzzilli_Protobuf_SetPrivateProperty.with { $0.propertyName = op.propertyName }
            case .updatePrivateProperty(let op):
                $0.updatePrivateProperty = Fuzzilli_Protobuf_UpdatePrivateProperty.with {
                    $0.propertyName = op.propertyName
                    $0.op = convertEnum(op.op, BinaryOperator.allCases)
                }
            case .callPrivateMethod(let op):
                $0.callPrivateMethod = Fuzzilli_Protobuf_CallPrivateMethod.with { $0.methodName = op.methodName }
            case .getSuperProperty(let op):
                $0.getSuperProperty = Fuzzilli_Protobuf_GetSuperProperty.with { $0.propertyName = op.propertyName }
            case .setSuperProperty(let op):
                $0.setSuperProperty = Fuzzilli_Protobuf_SetSuperProperty.with { $0.propertyName = op.propertyName }
            case .getComputedSuperProperty(_):
                $0.getComputedSuperProperty = Fuzzilli_Protobuf_GetComputedSuperProperty()
            case .setComputedSuperProperty(_):
                $0.setComputedSuperProperty = Fuzzilli_Protobuf_SetComputedSuperProperty()
            case .updateSuperProperty(let op):
                $0.updateSuperProperty = Fuzzilli_Protobuf_UpdateSuperProperty.with {
                    $0.propertyName = op.propertyName
                    $0.op = convertEnum(op.op, BinaryOperator.allCases)
                }
            case .explore(let op):
                $0.explore = Fuzzilli_Protobuf_Explore.with {
                    $0.id = op.id
                    $0.rngSeed = Int64(op.rngSeed)
                }
            case .probe(let op):
                $0.probe = Fuzzilli_Protobuf_Probe.with { $0.id = op.id }
            case .fixup(let op):
                $0.fixup = Fuzzilli_Protobuf_Fixup.with {
                    $0.id = op.id
                    $0.action = op.action
                    $0.originalOperation = op.originalOperation
                    $0.hasOutput_p = op.hasOutput
                }
            case .beginWith(let op):
                $0.beginWith = Fuzzilli_Protobuf_BeginWith.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                }
            case .endWith:
                $0.endWith = Fuzzilli_Protobuf_EndWith()
            case .beginIf(let op):
                $0.beginIf = Fuzzilli_Protobuf_BeginIf.with {
                    $0.inverted = op.inverted
                }
            case .beginElse:
                $0.beginElse = Fuzzilli_Protobuf_BeginElse()
            case .endIf:
                $0.endIf = Fuzzilli_Protobuf_EndIf()
            case .beginSwitch(let op):
                $0.beginSwitch = Fuzzilli_Protobuf_BeginSwitch.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                }
            case .beginSwitchCase:
                $0.beginSwitchCase = Fuzzilli_Protobuf_BeginSwitchCase()
            case .beginSwitchDefaultCase:
                $0.beginSwitchDefaultCase = Fuzzilli_Protobuf_BeginSwitchDefaultCase()
            case .switchBreak:
                $0.switchBreak = Fuzzilli_Protobuf_SwitchBreak()
            case .endSwitchCase(let op):
                $0.endSwitchCase = Fuzzilli_Protobuf_EndSwitchCase.with { $0.fallsThrough = op.fallsThrough }
            case .endSwitch:
                $0.endSwitch = Fuzzilli_Protobuf_EndSwitch()
            case .beginWhileLoopHeader:
                $0.beginWhileLoopHeader = Fuzzilli_Protobuf_BeginWhileLoopHeader()
            case .beginWhileLoopBody(let op):
                $0.beginWhileLoopBody = Fuzzilli_Protobuf_BeginWhileLoopBody.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                }
            case .endWhileLoop:
                $0.endWhileLoop = Fuzzilli_Protobuf_EndWhileLoop()
            case .beginDoWhileLoopBody(let op):
                $0.beginDoWhileLoopBody = Fuzzilli_Protobuf_BeginDoWhileLoopBody.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                }
            case .beginDoWhileLoopHeader:
                $0.beginDoWhileLoopHeader = Fuzzilli_Protobuf_BeginDoWhileLoopHeader()
            case .endDoWhileLoop:
                $0.endDoWhileLoop = Fuzzilli_Protobuf_EndDoWhileLoop()
            case .beginForLoopInitializer:
                $0.beginForLoopInitializer = Fuzzilli_Protobuf_BeginForLoopInitializer()
            case .beginForLoopCondition:
                $0.beginForLoopCondition = Fuzzilli_Protobuf_BeginForLoopCondition()
            case .beginForLoopAfterthought:
                $0.beginForLoopAfterthought = Fuzzilli_Protobuf_BeginForLoopAfterthought()
            case .beginForLoopBody(let op):
                $0.beginForLoopBody = Fuzzilli_Protobuf_BeginForLoopBody.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                }
            case .endForLoop:
                $0.endForLoop = Fuzzilli_Protobuf_EndForLoop()
            case .beginForInLoop(let op):
                $0.beginForInLoop = Fuzzilli_Protobuf_BeginForInLoop.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                }
            case .endForInLoop:
                $0.endForInLoop = Fuzzilli_Protobuf_EndForInLoop()
            case .beginForOfLoop(let op):
                $0.beginForOfLoop = Fuzzilli_Protobuf_BeginForOfLoop.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                    $0.isAsync = op.isAsync
                }
            case .beginForOfLoopWithDestruct(let op):
                $0.beginForOfLoopWithDestruct = Fuzzilli_Protobuf_BeginForOfLoopWithDestruct.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                    $0.indices = op.indices.map({ Int32($0) })
                    $0.hasRestElement_p = op.hasRestElement
                }
            case .endForOfLoop:
                $0.endForOfLoop = Fuzzilli_Protobuf_EndForOfLoop()
            case .beginRepeatLoop(let op):
                $0.beginRepeatLoop = Fuzzilli_Protobuf_BeginRepeatLoop.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                    $0.iterations = Int64(op.iterations)
                    $0.exposesLoopCounter = op.exposesLoopCounter
                }
            case .endRepeatLoop:
                $0.endRepeatLoop = Fuzzilli_Protobuf_EndRepeatLoop()
            case .loopBreak:
                $0.loopBreak = Fuzzilli_Protobuf_LoopBreak()
            case .loopContinue:
                $0.loopContinue = Fuzzilli_Protobuf_LoopContinue()
            case .beginTry:
                $0.beginTry = Fuzzilli_Protobuf_BeginTry()
            case .beginCatch:
                $0.beginCatch = Fuzzilli_Protobuf_BeginCatch()
            case .beginCatchWithDestruct(let op):
                $0.beginCatchWithDestruct = Fuzzilli_Protobuf_BeginCatchWithDestruct.with {
                    $0.destructPropertyNames = op.destructPropertyNames
                }
            case .beginFinally:
                $0.beginFinally = Fuzzilli_Protobuf_BeginFinally()
            case .endTryCatchFinally:
                $0.endTryCatchFinally = Fuzzilli_Protobuf_EndTryCatchFinally()
            case .throwException:
                $0.throwException = Fuzzilli_Protobuf_ThrowException()
            case .beginCodeString:
                $0.beginCodeString = Fuzzilli_Protobuf_BeginCodeString()
            case .endCodeString:
                $0.endCodeString = Fuzzilli_Protobuf_EndCodeString()
            case .beginBlockStatement(let op):
                $0.beginBlockStatement = Fuzzilli_Protobuf_BeginBlockStatement.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                }
            case .endBlockStatement:
                $0.endBlockStatement = Fuzzilli_Protobuf_EndBlockStatement()
            case .jumpToLabel(let op):
                $0.jumpToLabel = Fuzzilli_Protobuf_JumpToLabel.with {
                    $0.labelBase = Fuzzilli_Protobuf_Label.with {
                        $0.id = op.label.ID
                        $0.associatability = op.label.associatability.rawValue
                    }
                }
            case .loadNewTarget:
                $0.loadNewTarget = Fuzzilli_Protobuf_LoadNewTarget()
            case .print(_):
                fatalError("Print operations should not be serialized")
            }
        }

        opCache?.add(op)
        return result
    }

    func asProtobuf() -> ProtobufType {
        // Dedicated label counter for processing LabelableOperation
        var labelableOperationCounter: UInt64 = 0

        return asProtobuf(labelableOperationCounter: &labelableOperationCounter, with: nil)
    }

    init(from proto: ProtobufType, labelMapper: LabelMapper?, with opCache: OperationCache?) throws {
        guard proto.inouts.allSatisfy({ Variable.isValidVariableNumber(Int(clamping: $0)) }) else {
            throw FuzzilliError.instructionDecodingError("invalid variables in instruction")
        }
        let inouts = proto.inouts.map({ Variable(number: Int($0)) })

        // Helper function to convert between the Swift and Protobuf enums.
        func convertEnum<S: Equatable, P: RawRepresentable>(_ p: P, _ allValues: [S]) throws -> S where P.RawValue == Int {
            guard allValues.indices.contains(p.rawValue) else {
                throw FuzzilliError.instructionDecodingError("invalid enum value \(p.rawValue) for type \(S.self)")
            }
            return allValues[p.rawValue]
        }

        func convertParameters(_ parameters: Fuzzilli_Protobuf_Parameters) -> Parameters {
            return Parameters(count: Int(parameters.count), hasRestParameter: parameters.hasRest_p)
        }

        guard let operation = proto.operation else {
            throw FuzzilliError.instructionDecodingError("missing operation for instruction")
        }

        let op: Operation
        switch operation {
        case .opIdx(let idx):
            guard let cachedOp = opCache?.get(Int(idx)) else {
                throw FuzzilliError.instructionDecodingError("invalid operation index or no decoding context available")
            }
            op = cachedOp
        case .loadInteger(let p):
            op = LoadInteger(value: p.value)
        case .loadBigInt(let p):
            op = LoadBigInt(value: p.value)
        case .loadFloat(let p):
            op = LoadFloat(value: p.value)
        case .loadString(let p):
            op = LoadString(value: p.value)
        case .loadBoolean(let p):
            op = LoadBoolean(value: p.value)
        case .loadUndefined:
            op = LoadUndefined()
        case .loadNull:
            op = LoadNull()
        case .loadThis:
            op = LoadThis()
        case .loadArguments:
            op = LoadArguments()
        case .loadRegExp(let p):
            op = LoadRegExp(pattern: p.pattern, flags: RegExpFlags(rawValue: p.flags))
        case .beginObjectLiteral:
            op = BeginObjectLiteral()
        case .objectLiteralAddStringProperty(let p):
            op = ObjectLiteralAddStringProperty(propertyName: p.propertyName)
        case .objectLiteralAddNumericProperty(let p):
            op = ObjectLiteralAddNumericProperty(propertyName: p.propertyName)
        case .objectLiteralAddComputedProperty:
            op = ObjectLiteralAddComputedProperty()
        case .objectLiteralAddElement(let p):
            op = ObjectLiteralAddElement(index: p.index)
        case .objectLiteralCopyProperties:
            op = ObjectLiteralCopyProperties()
        case .objectLiteralSetPrototype:
            op = ObjectLiteralSetPrototype()
        case .beginObjectLiteralStringMethod(let p):
            op = BeginObjectLiteralStringMethod(methodName: p.methodName, isAsync: p.isAsync, parameters: convertParameters(p.parameters))
        case .beginObjectLiteralNumericMethod(let p):
            op = BeginObjectLiteralNumericMethod(methodName: p.methodName, isAsync: p.isAsync, parameters: convertParameters(p.parameters))
        case .beginObjectLiteralComputedMethod(let p):
            op = BeginObjectLiteralComputedMethod(parameters: convertParameters(p.parameters), isAsync: p.isAsync)
        case .endObjectLiteralMethod:
            op = EndObjectLiteralMethod()
        case .beginObjectLiteralStringGetter(let p):
            op = BeginObjectLiteralStringGetter(propertyName: p.propertyName)
        case .beginObjectLiteralComputedGetter:
            op = BeginObjectLiteralComputedGetter()
        case .beginObjectLiteralNumericGetter(let p):
            op = BeginObjectLiteralNumericGetter(propertyName: p.propertyName)
        case .endObjectLiteralGetter:
            op = EndObjectLiteralGetter()
        case .beginObjectLiteralStringSetter(let p):
            op = BeginObjectLiteralStringSetter(propertyName: p.propertyName)
        case .beginObjectLiteralComputedSetter:
            op = BeginObjectLiteralComputedSetter()
        case .beginObjectLiteralNumericSetter(let p):
            op = BeginObjectLiteralNumericSetter(propertyName: p.propertyName)
        case .endObjectLiteralSetter:
            op = EndObjectLiteralSetter()
        case .endObjectLiteral:
            op = EndObjectLiteral()
        case .beginClassDefinition(let p):
            op = BeginClassDefinition(hasSuperclass: p.hasSuperclass_p)
        case .beginClassConstructor(let p):
            op = BeginClassConstructor(parameters: convertParameters(p.parameters))
        case .endClassConstructor:
            op = EndClassConstructor()
        case .classAddInstanceProperty(let p):
            op = ClassAddInstanceProperty(propertyName: p.propertyName, hasValue: p.hasValue_p)
        case .classAddInstanceElement(let p):
            op = ClassAddInstanceElement(index: p.index, hasValue: p.hasValue_p)
        case .classAddInstanceComputedProperty(let p):
            op = ClassAddInstanceComputedProperty(hasValue: p.hasValue_p)
        case .beginClassInstanceStringMethod(let p):
            op = BeginClassInstanceStringMethod(methodName: p.methodName, parameters: convertParameters(p.parameters))
        case .beginClassInstanceComputedMethod(let p):
            op = BeginClassInstanceComputedMethod(parameters: convertParameters(p.parameters))
        case .beginClassInstanceNumericMethod(let p):
            op = BeginClassInstanceNumericMethod(methodName: p.methodName, parameters: convertParameters(p.parameters))
        case .beginClassInstanceBigIntMethod(let p):
            op = BeginClassInstanceBigIntMethod(methodName: p.methodName, parameters: convertParameters(p.parameters))
        case .endClassInstanceMethod:
            op = EndClassInstanceMethod()
        case .beginClassInstanceStringGetter(let p):
            op = BeginClassInstanceStringGetter(propertyName: p.propertyName)
        case .beginClassInstanceComputedGetter:
            op = BeginClassInstanceComputedGetter()
        case .beginClassInstanceNumericGetter(let p):
            op = BeginClassInstanceNumericGetter(propertyName: p.propertyName)
        case .endClassInstanceGetter:
            op = EndClassInstanceGetter()
        case .beginClassInstanceStringSetter(let p):
            op = BeginClassInstanceStringSetter(propertyName: p.propertyName)
        case .beginClassInstanceComputedSetter:
            op = BeginClassInstanceComputedSetter()
        case .beginClassInstanceNumericSetter(let p):
            op = BeginClassInstanceNumericSetter(propertyName: p.propertyName)
        case .endClassInstanceSetter:
            op = EndClassInstanceSetter()
        case .classAddStaticProperty(let p):
            op = ClassAddStaticProperty(propertyName: p.propertyName, hasValue: p.hasValue_p)
        case .classAddStaticElement(let p):
            op = ClassAddStaticElement(index: p.index, hasValue: p.hasValue_p)
        case .classAddStaticComputedProperty(let p):
            op = ClassAddStaticComputedProperty(hasValue: p.hasValue_p)
        case .beginClassStaticInitializer:
            op = BeginClassStaticInitializer()
        case .endClassStaticInitializer:
            op = EndClassStaticInitializer()
        case .beginClassStaticStringMethod(let p):
            op = BeginClassStaticStringMethod(methodName: p.methodName, parameters: convertParameters(p.parameters))
        case .beginClassStaticComputedMethod(let p):
            op = BeginClassStaticComputedMethod(parameters: convertParameters(p.parameters))
        case .beginClassStaticNumericMethod(let p):
            op = BeginClassStaticNumericMethod(methodName: p.methodName, parameters: convertParameters(p.parameters))
        case .beginClassStaticBigIntMethod(let p):
            op = BeginClassStaticBigIntMethod(methodName: p.methodName, parameters: convertParameters(p.parameters))
        case .endClassStaticMethod:
            op = EndClassStaticMethod()
        case .beginClassStaticStringGetter(let p):
            op = BeginClassStaticStringGetter(propertyName: p.propertyName)
        case .beginClassStaticComputedGetter:
            op = BeginClassStaticComputedGetter()
        case .beginClassStaticNumericGetter(let p):
            op = BeginClassStaticNumericGetter(propertyName: p.propertyName)
        case .endClassStaticGetter:
            op = EndClassStaticGetter()
        case .beginClassStaticStringSetter(let p):
            op = BeginClassStaticStringSetter(propertyName: p.propertyName)
        case .beginClassStaticComputedSetter:
            op = BeginClassStaticComputedSetter()
        case .beginClassStaticNumericSetter(let p):
            op = BeginClassStaticNumericSetter(propertyName: p.propertyName)
        case .endClassStaticSetter:
            op = EndClassStaticSetter()
        case .classAddPrivateInstanceProperty(let p):
            op = ClassAddPrivateInstanceProperty(propertyName: p.propertyName, hasValue: p.hasValue_p)
        case .classAddPrivateInstancePropertyWithPrivateInInitializer(let p):
            op = ClassAddPrivateInstancePropertyWithPrivateInInitializer(propertyName: p.propertyName, testInPropertyName: p.testInPropertyName, hasCustomInObject: p.hasCustomInObject_p)
        case .beginClassPrivateInstanceMethod(let p):
            op = BeginClassPrivateInstanceMethod(methodName: p.methodName, parameters: convertParameters(p.parameters))
        case .endClassPrivateInstanceMethod:
            op = EndClassPrivateInstanceMethod()
        case .classAddPrivateStaticProperty(let p):
            op = ClassAddPrivateStaticProperty(propertyName: p.propertyName, hasValue: p.hasValue_p)
        case .classAddPrivateStaticPropertyWithPrivateInInitializer(let p):
            op = ClassAddPrivateStaticPropertyWithPrivateInInitializer(propertyName: p.propertyName, testInPropertyName: p.testInPropertyName, hasCustomInObject: p.hasCustomInObject_p)
        case .beginClassPrivateStaticMethod(let p):
            op = BeginClassPrivateStaticMethod(methodName: p.methodName, parameters: convertParameters(p.parameters))
        case .endClassPrivateStaticMethod:
            op = EndClassPrivateStaticMethod()
        case .endClassDefinition:
            op = EndClassDefinition()
        case .createArray:
            op = CreateArray(numInitialValues: inouts.count - 1)
        case .createIntArray(let p):
            op = CreateIntArray(values: p.values)
        case .createFloatArray(let p):
            op = CreateFloatArray(values: p.values)
        case .createArrayWithSpread(let p):
            op = CreateArrayWithSpread(spreads: p.spreads)
        case .createTemplateString(let p):
            op = CreateTemplateString(parts: p.parts)
        case .loadBuiltin(let p):
            op = LoadBuiltin(builtinName: p.builtinName)
        case .getProperty(let p):
            op = GetProperty(propertyName: p.propertyName, isGuarded: p.isGuarded)
        case .setProperty(let p):
            op = SetProperty(propertyName: p.propertyName)
        case .updateProperty(let p):
            op = UpdateProperty(propertyName: p.propertyName, operator: try convertEnum(p.op, BinaryOperator.allCases))
        case .deleteProperty(let p):
            op = DeleteProperty(propertyName: p.propertyName, isGuarded: p.isGuarded)
        case .configureProperty(let p):
            var flags = PropertyFlags()
            if p.isWritable { flags.insert(.writable) }
            if p.isConfigurable { flags.insert(.configurable) }
            if p.isEnumerable { flags.insert(.enumerable) }
            op = ConfigureProperty(propertyName: p.propertyName, flags: flags, type: try convertEnum(p.type, PropertyType.allCases))
        case .getElement(let p):
            op = GetElement(index: p.index, isGuarded: p.isGuarded)
        case .setElement(let p):
            op = SetElement(index: p.index)
        case .updateElement(let p):
            op = UpdateElement(index: p.index, operator: try convertEnum(p.op, BinaryOperator.allCases))
        case .deleteElement(let p):
            op = DeleteElement(index: p.index, isGuarded: p.isGuarded)
        case .configureElement(let p):
            var flags = PropertyFlags()
            if p.isWritable { flags.insert(.writable) }
            if p.isConfigurable { flags.insert(.configurable) }
            if p.isEnumerable { flags.insert(.enumerable) }
            op = ConfigureElement(index: p.index, flags: flags, type: try convertEnum(p.type, PropertyType.allCases))
        case .getComputedProperty(let p):
            op = GetComputedProperty(isGuarded: p.isGuarded)
        case .setComputedProperty:
            op = SetComputedProperty()
        case .updateComputedProperty(let p):
            op = UpdateComputedProperty(operator: try convertEnum(p.op, BinaryOperator.allCases))
        case .deleteComputedProperty(let p):
            op = DeleteComputedProperty(isGuarded: p.isGuarded)
        case .configureComputedProperty(let p):
            var flags = PropertyFlags()
            if p.isWritable { flags.insert(.writable) }
            if p.isConfigurable { flags.insert(.configurable) }
            if p.isEnumerable { flags.insert(.enumerable) }
            op = ConfigureComputedProperty(flags: flags, type: try convertEnum(p.type, PropertyType.allCases))
        case .typeOf:
            op = TypeOf()
        case .testInstanceOf:
            op = TestInstanceOf()
        case .testIn:
            op = TestIn()
        case .testClassPrivateInInMethod(let p):
            op = TestClassPrivateInInMethod(propertyName: p.propertyName)
        case .beginPlainFunction(let p):
            let parameters = convertParameters(p.parameters)
            op = BeginPlainFunction(parameters: parameters, isStrict: p.isStrict)
        case .endPlainFunction:
            op = EndPlainFunction()
        case .beginArrowFunction(let p):
            let parameters = convertParameters(p.parameters)
            op = BeginArrowFunction(parameters: parameters, isStrict: p.isStrict)
        case .endArrowFunction:
            op = EndArrowFunction()
        case .beginExpressionBodyArrowFunction(let p):
            let parameters = convertParameters(p.parameters)
            op = BeginExpressionBodyArrowFunction(parameters: parameters, isStrict: p.isStrict)
        case .endExpressionBodyArrowFunction:
            op = EndExpressionBodyArrowFunction()
        case .beginGeneratorFunction(let p):
            let parameters = convertParameters(p.parameters)
            op = BeginGeneratorFunction(parameters: parameters, isStrict: p.isStrict)
        case .endGeneratorFunction:
            op = EndGeneratorFunction()
        case .beginAsyncFunction(let p):
            let parameters = convertParameters(p.parameters)
            op = BeginAsyncFunction(parameters: parameters, isStrict: p.isStrict)
        case .endAsyncFunction:
            op = EndAsyncFunction()
        case .beginAsyncArrowFunction(let p):
            let parameters = convertParameters(p.parameters)
            op = BeginAsyncArrowFunction(parameters: parameters, isStrict: p.isStrict)
        case .endAsyncArrowFunction:
            op = EndAsyncArrowFunction()
        case .beginAsyncGeneratorFunction(let p):
            let parameters = convertParameters(p.parameters)
            op = BeginAsyncGeneratorFunction(parameters: parameters, isStrict: p.isStrict)
        case .endAsyncGeneratorFunction:
            op = EndAsyncGeneratorFunction()
        case .beginConstructor(let p):
            let parameters = convertParameters(p.parameters)
            op = BeginConstructor(parameters: parameters)
        case .endConstructor:
            op = EndConstructor()
        case .return:
            let hasReturnValue = inouts.count == 1
            op = Return(hasReturnValue: hasReturnValue)
        case .yield:
            let hasArgument = inouts.count == 2
            op = Yield(hasArgument: hasArgument)
        case .yieldEach:
            op = YieldEach()
        case .await:
            op = Await()
        case .callFunction(let p):
            op = CallFunction(numArguments: inouts.count - 2, isGuarded: p.isGuarded)
        case .callFunctionWithSpread(let p):
            op = CallFunctionWithSpread(numArguments: inouts.count - 2, spreads: p.spreads, isGuarded: p.isGuarded)
        case .construct(let p):
            op = Construct(numArguments: inouts.count - 2, isGuarded: p.isGuarded)
        case .constructWithSpread(let p):
            op = ConstructWithSpread(numArguments: inouts.count - 2, spreads: p.spreads, isGuarded: p.isGuarded)
        case .callMethod(let p):
            op = CallMethod(methodName: p.methodName, numArguments: inouts.count - 2, isGuarded: p.isGuarded)
        case .callMethodWithSpread(let p):
            op = CallMethodWithSpread(methodName: p.methodName, numArguments: inouts.count - 2, spreads: p.spreads, isGuarded: p.isGuarded)
        case .callComputedMethod(let p):
            op = CallComputedMethod(numArguments: inouts.count - 3, isGuarded: p.isGuarded)
        case .callComputedMethodWithSpread(let p):
            op = CallComputedMethodWithSpread(numArguments: inouts.count - 3, spreads: p.spreads, isGuarded: p.isGuarded)
        case .unaryOperation(let p):
            op = UnaryOperation(try convertEnum(p.op, UnaryOperator.allCases))
        case .binaryOperation(let p):
            op = BinaryOperation(try convertEnum(p.op, BinaryOperator.allCases))
        case .ternaryOperation:
            op = TernaryOperation()
        case .update(let p):
            op = Update(try convertEnum(p.op, BinaryOperator.allCases))
        case .dup:
            op = Dup()
        case .reassign:
            op = Reassign()
        case .destructArray(let p):
            op = DestructArray(indices: p.indices.map({ Int64($0) }), lastIsRest: p.lastIsRest)
        case .destructArrayAndReassign(let p):
            op = DestructArrayAndReassign(indices: p.indices.map({ Int64($0) }), lastIsRest: p.lastIsRest)
        case .destructObject(let p):
            op = DestructObject(properties: p.properties, hasRestElement: p.hasRestElement_p)
        case .destructObjectAndReassign(let p):
            op = DestructObjectAndReassign(properties: p.properties, hasRestElement: p.hasRestElement_p)
        case .compare(let p):
            op = Compare(try convertEnum(p.op, Comparator.allCases))
        case .loadNamedVariable(let p):
            op = LoadNamedVariable(p.variableName)
        case .storeNamedVariable(let p):
            op = StoreNamedVariable(p.variableName)
        case .defineNamedVariable(let p):
            op = DefineNamedVariable(p.variableName)
        case .eval(let p):
            let numArguments = inouts.count - (p.hasOutput_p ? 1 : 0)
            op = Eval(p.code, numArguments: numArguments, hasOutput: p.hasOutput_p)
        case .callSuperConstructor:
            op = CallSuperConstructor(numArguments: inouts.count)
        case .callSuperMethod(let p):
            op = CallSuperMethod(methodName: p.methodName, numArguments: inouts.count - 1)
        case .getPrivateProperty(let p):
            op = GetPrivateProperty(propertyName: p.propertyName)
        case .setPrivateProperty(let p):
            op = SetPrivateProperty(propertyName: p.propertyName)
        case .updatePrivateProperty(let p):
            op = UpdatePrivateProperty(propertyName: p.propertyName, operator: try convertEnum(p.op, BinaryOperator.allCases))
        case .callPrivateMethod(let p):
            op = CallPrivateMethod(methodName: p.methodName, numArguments: inouts.count - 2)
        case .getSuperProperty(let p):
            op = GetSuperProperty(propertyName: p.propertyName)
        case .setSuperProperty(let p):
            op = SetSuperProperty(propertyName: p.propertyName)
        case .getComputedSuperProperty(_):
            op = GetComputedSuperProperty()
        case .setComputedSuperProperty(_):
            op = SetComputedSuperProperty()
        case .updateSuperProperty(let p):
            op = UpdateSuperProperty(propertyName: p.propertyName, operator: try convertEnum(p.op, BinaryOperator.allCases))
        case .explore(let p):
            op = Explore(id: p.id, numArguments: inouts.count - 1, rngSeed: UInt32(p.rngSeed))
        case .probe(let p):
            op = Probe(id: p.id)
        case .fixup(let p):
            op = Fixup(id: p.id, action: p.action, originalOperation: p.originalOperation, numArguments: inouts.count - (p.hasOutput_p ? 1 : 0), hasOutput: p.hasOutput_p)
        case .beginWith(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginWith(label: label)
                label.holder = lop
            } else {
                lop = BeginWith()
            }
            op = lop
        case .endWith:
            op = EndWith()
        case .beginIf(let p):
            op = BeginIf(inverted: p.inverted)
        case .beginElse:
            op = BeginElse()
        case .endIf:
            op = EndIf()
        case .beginSwitch(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginSwitch(label: label)
                label.holder = lop
            } else {
                lop = BeginSwitch()
            }
            op = lop
        case .beginSwitchCase:
            op = BeginSwitchCase()
        case .beginSwitchDefaultCase:
            op = BeginSwitchDefaultCase()
        case .switchBreak:
            op = SwitchBreak()
        case .endSwitchCase(let p):
            op = EndSwitchCase(fallsThrough: p.fallsThrough)
        case .endSwitch:
            op = EndSwitch()
        case .beginWhileLoopHeader:
            op = BeginWhileLoopHeader()
        case .beginWhileLoopBody(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginWhileLoopBody(label: label)
                label.holder = lop
            } else {
                lop = BeginWhileLoopBody()
            }
            op = lop
        case .endWhileLoop:
            op = EndWhileLoop()
        case .beginDoWhileLoopBody(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginDoWhileLoopBody(label: label)
                label.holder = lop
            } else {
                lop = BeginDoWhileLoopBody()
            }
            op = lop
        case .beginDoWhileLoopHeader:
            op = BeginDoWhileLoopHeader()
        case .endDoWhileLoop:
            op = EndDoWhileLoop()
        case .beginForLoopInitializer:
            op = BeginForLoopInitializer()
        case .beginForLoopCondition:
            assert(inouts.count % 2 == 0)
            op = BeginForLoopCondition(numLoopVariables: inouts.count / 2)
        case .beginForLoopAfterthought:
            // First input is the condition
            op = BeginForLoopAfterthought(numLoopVariables: inouts.count - 1)
        case .beginForLoopBody(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginForLoopBody(label: label, numLoopVariables: inouts.count)
                label.holder = lop
            } else {
                lop = BeginForLoopBody(numLoopVariables: inouts.count)
            }
            op = lop
        case .endForLoop:
            op = EndForLoop()
        case .beginForInLoop(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginForInLoop(label: label)
                label.holder = lop
            } else {
                lop = BeginForInLoop()
            }
            op = lop
        case .endForInLoop:
            op = EndForInLoop()
        case .beginForOfLoop(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginForOfLoop(label: label, isAsync: p.isAsync)
                label.holder = lop
            } else {
                lop = BeginForOfLoop(isAsync: p.isAsync)
            }
            op = lop
        case .beginForOfLoopWithDestruct(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginForOfLoopWithDestruct(label: label, indices: p.indices.map({ Int64($0) }), hasRestElement: p.hasRestElement_p)
                label.holder = lop
            } else {
                lop = BeginForOfLoopWithDestruct(indices: p.indices.map({ Int64($0) }), hasRestElement: p.hasRestElement_p)
            }
            op = lop
        case .endForOfLoop:
            op = EndForOfLoop()
        case .beginRepeatLoop(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginRepeatLoop(label: label, iterations: Int(p.iterations), exposesLoopCounter: p.exposesLoopCounter)
                label.holder = lop
            } else {
                lop = BeginRepeatLoop(iterations: Int(p.iterations), exposesLoopCounter: p.exposesLoopCounter)
            }
            op = lop
        case .endRepeatLoop:
            op = EndRepeatLoop()
        case .loopBreak:
            op = LoopBreak()
        case .loopContinue:
            op = LoopContinue()
        case .beginTry:
            op = BeginTry()
        case .beginCatch:
            op = BeginCatch()
        case .beginCatchWithDestruct(let p):
            op = BeginCatchWithDestruct(destructPropertyNames: p.destructPropertyNames)
        case .beginFinally:
            op = BeginFinally()
        case .endTryCatchFinally:
            op = EndTryCatchFinally()
        case .throwException:
            op = ThrowException()
        case .beginCodeString:
            op = BeginCodeString()
        case .endCodeString:
            op = EndCodeString()
        case .beginBlockStatement(let p):
            let lop: LabelableOperation
            if let label = labelMapper?.create(p.labelBase.id, Label.Associatability(rawValue: p.labelBase.associatability)) {
                lop = BeginBlockStatement(label: label)
                label.holder = lop
            } else {
                lop = BeginBlockStatement()
            }
            op = lop
        case .endBlockStatement:
            op = EndBlockStatement()
        case .jumpToLabel(let p):
            let hasLabel = labelMapper?.has(p.labelBase.id)
            guard hasLabel != nil && hasLabel! else {
                throw FuzzilliError.instructionDecodingError("deserialized JumpToLabel should have corresponding Label previously initialized")
            }
            guard let jumpType = JumpType(rawValue: p.jumpType) else {
                throw FuzzilliError.instructionDecodingError("deserialized JumpToLabel shouldn't have incorrect JumpType")
            }
            let label = labelMapper!.get(p.labelBase.id)
            let jop = JumpToLabel(jumpType: jumpType, label: label)
            assert(label.isHolderAlive())
            guard label.bindable(jop) else {
                throw FuzzilliError.instructionDecodingError("deserialized JumpToLabel isn't compatible with previously initialized Label")
            }
            label.addReferencer(jop)
            op = jop
        case .loadNewTarget:
            op = LoadNewTarget()
        case .nop:
            op = Nop()
        case .print:
            fatalError("unreachable")
        }

        guard op.numInputs + op.numOutputs + op.numInnerOutputs == inouts.count else {
            throw FuzzilliError.instructionDecodingError("incorrect number of in- and outputs")
        }

        opCache?.add(op)

        self.init(op, inouts: inouts)
    }

    init(from proto: ProtobufType) throws {
        try self.init(from: proto, labelMapper: nil, with: nil)
    }
}
