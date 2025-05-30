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

/// A mutator that concatenates two programs together.
public class ConcatMutator: Mutator {
    override func mutate(_ program: Program, using b: ProgramBuilder, for fuzzer: Fuzzer) -> Program? {
        let suffix = b.fuzzer.corpus.randomElementForSplicing()

        b.append(program)
        b.trace("Appending program \(suffix.id)")
        b.append(suffix)

        return b.finalize()
    }

    override func mutate2(_ program: Program, using b: ProgramBuilder, for fuzzer: Fuzzer) -> Program? {
        let suffix = b.fuzzer.corpus.randomElementForSplicing()

        b.append(program)
        b.trace("Appending program \(suffix.id)")
        b.append(suffix)

        return b.finalize()
    }
}
