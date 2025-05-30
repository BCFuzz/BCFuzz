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

/// The core fuzzer responsible for generating and executing programs.
public class MutationEngine: FuzzEngine {
    // The number of consecutive mutations to apply to a sample.
    private let numConsecutiveMutations: Int

    public init(numConsecutiveMutations: Int) {
        self.numConsecutiveMutations = numConsecutiveMutations
        super.init(name: "MutationEngine")
    }

    /// Perform one round of fuzzing.
    ///
    /// High-level fuzzing algorithm:
    ///
    ///     let parent = pickSampleFromCorpus()
    ///     repeat N times:
    ///         let current = mutate(parent)
    ///         execute(current)
    ///         if current produced crashed:
    ///             output current
    ///         elif current resulted in a runtime exception or a time out:
    ///             // do nothing
    ///         elif current produced new, interesting behaviour:
    ///             minimize and add to corpus
    ///         else
    ///             parent = current
    ///
    ///
    /// This ensures that samples will be mutated multiple times as long
    /// as the intermediate results do not cause a runtime exception.
    public override func fuzzOne(_ group: DispatchGroup) {
        var parent = fuzzer.corpus.randomElementForMutating()
        let seed_line = parent.line

        if seed_line == 0 || seed_line == 1 { // edge seed or builtin bytecode 
            parent = prepareForMutating(parent)
            for _ in 0..<numConsecutiveMutations {
                // TODO: factor out code shared with the HybridEngine?
                var mutator = fuzzer.mutators.randomElement()
                let maxAttempts = 10
                var mutatedProgram: Program? = nil
                for _ in 0..<maxAttempts {
                    if let result = mutator.mutate(parent, for: fuzzer) {
                        // Success!
                        result.contributors.formUnion(parent.contributors)
                        mutator.addedInstructions(result.size - parent.size)
                        mutatedProgram = result
                        break
                    } else {
                        // Try a different mutator.
                        mutator.failedToGenerate()
                        mutator = fuzzer.mutators.randomElement()
                    }
                }

                guard let program = mutatedProgram else {
                    logger.warning("Could not mutate sample, giving up. Sample:\n\(FuzzILLifter().lift(parent))")
                    continue
                }

                assert(program !== parent)
                let outcome = execute(program)

                // Mutate the program further if it succeeded.
                if .succeeded == outcome {
                    parent = program
                }
            }
        }
        else {
            let options = LiftingOptions.includeComments
            let code = fuzzer.lifter.lift(parent, withOptions: options)
            let b = fuzzer.makeBuilder()
            parent.compute_index()
            b.mysplice(parent, parent.interesting_index)
            

            //var mycontent = "\n================watch program==============\n"
            //mycontent += code
            //mycontent += "\nJSInput line: \(parent.line)"
            //mycontent += "\ninteresting index: \(parent.interesting_index)\n\n"
            //mycontent += "\(FuzzILLifter().lift(parent))"
            //mycontent += "\n=====================end watch==================\n"
            //print(mycontent)
            
            for ii in 0..<10 {
                var mutator = fuzzer.mutators.randomElement()
                let maxAttempts = 10
                var mutatedProgram: Program? = nil
                for _ in 0..<maxAttempts {
                    if let result = mutator.mutate2(parent, for: fuzzer) {
                        // Success!
                        result.contributors.formUnion(parent.contributors)
                        mutator.addedInstructions(result.size - parent.size)
                        mutatedProgram = result
                        break
                    } else {
                        // Try a different mutator.
                        mutator.failedToGenerate()
                        mutator = fuzzer.mutators.randomElement()
                    }
                }
                guard let program = mutatedProgram else {
                    //logger.warning("Could not mutate sample, giving up. Sample:\n\(FuzzILLifter().lift(parent))")
                    logger.warning("Could not mutate sample in \(ii)th mutation, giving up. Interesting index: \(parent.interesting_index)")
                    continue
                }
                assert(program !== parent)
                program.origin = parent.origin
                let _ = execute(program)
            }
        }

        // if line == 0 || line == 1, do not splice
        // TODO: non consecutive mutation for bytecode seed, which do not need pass line information
        // {}

        // or

        // TODO: How can I pass line information in consecutive mutation
        // preserve certain FuzzIL in consecutive mutation and splice base on that FuzzIL every time? 
    }

    /// Pre-processing of programs to facilitate mutations on them.
    private func prepareForMutating(_ program: Program) -> Program {
        let b = fuzzer.makeBuilder()
        b.buildPrefix()
        b.append(program)
        return b.finalize()
    }
}
