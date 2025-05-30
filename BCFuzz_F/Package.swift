// swift-tools-version:5.3
//
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

import PackageDescription

let package = Package(
    name: "Fuzzilli",
    platforms: [
        .macOS(.v11),
    ],
    products: [
        .library(name: "Fuzzilli",targets: ["Fuzzilli"]),
    ],
    dependencies: [
        .package(url: "https://github.com/apple/swift-protobuf.git", from: "1.6.0"),
        .package(url: "https://gitlab.com/mordil/RediStack.git", .branch("master")),
        .package(url: "https://github.com/apple/swift-nio.git", from: "2.0.0"),
    ],
    targets: [
        .target(name: "libsocket",
                dependencies: []),

        .target(name: "libreprl",
                dependencies: []),

        .target(name: "libcoverage",
                dependencies: [],
                cSettings: [.unsafeFlags(["-O3"])],     // Using '-c release' when building uses '-O2', so '-O3' provides a performance gain
                linkerSettings: [.linkedLibrary("rt", .when(platforms: [.linux]))]),

        .target(name: "Fuzzilli",
                dependencies: [
                    .product(name: "SwiftProtobuf", package: "swift-protobuf"),
                    "libsocket",
                    "libreprl",
                    "libcoverage",
                    .product(name: "NIO", package: "swift-nio"),
                    "RediStack"],
                exclude: [
                    "Protobuf/operations.proto",
                    "Protobuf/program.proto",
                    "Protobuf/sync.proto",
                    "Protobuf/README.md",
                    "Protobuf/gen_programproto.py"],
                resources: [
                    // The ast.proto file is required by the node.js parser
                    .copy("Protobuf/ast.proto"),
                    .copy("Compiler/Parser")]),

        .target(name: "REPRLRun",
                dependencies: ["libreprl", .product(name: "NIO", package: "swift-nio"), "RediStack"]),

        .target(name: "FuzzilliCli",
                dependencies: ["Fuzzilli", .product(name: "NIO", package: "swift-nio"), "RediStack"]),

        .target(name: "FuzzILTool",
                dependencies: ["Fuzzilli"]),

        .testTarget(name: "FuzzilliTests",
                    dependencies: ["Fuzzilli"],
                    resources: [.copy("CompilerTests")]),
    ],
    swiftLanguageVersions: [.v5]
)
