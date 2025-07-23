function f3(a4, a5) {
    const o22 = {
        [a5]: "setYear",
        get f() {
            let v7 = 0;
            do {
                const v9 = Symbol.iterator;
                const o18 = {
                    [v9]() {
                        let v11 = 10;
                        const o17 = {
                            next() {
                                v11--;
                                const v15 = v11 == 0;
                                const o16 = {
                                    "done": v15,
                                    "value": v11,
                                };
                                return o16;
                            },
                        };
                        return o17;
                    },
                };
                v7++;
            } while (v7 < 9)
            return a4;
        },
    };
    return o22;
}
const v23 = f3("setYear", "LX");
const v24 = f3("LX", "uMs");
f3("setYear", "setYear");
function f26(a27, a28, a29) {
    const o39 = {
        "h": a27,
        "g": v24,
        get b() {
            const o31 = {
            };
            o31.d = f3;
            const o32 = {
            };
            o32.d = f3;
            o32.c = a27;
            const o33 = {
            };
            for (let v34 = 0; v34 < 100; v34++) {
                f3(a29, a29);
            }
            try { a27("uMs"); } catch (e) {}
            ("setYear").length;
            o33.d = f3;
            o33.c = a27;
            o33.b = a29;
            const o38 = {
            };
            o38.d = f3;
            o38.c = a27;
            o38.g = this;
            return a27;
        },
    };
    return o39;
}
f26("setYear", "setYear", "uMs");
f26("uMs", "setYear", "setYear");
f26("LX", "uMs", "uMs");
const v44 = new BigUint64Array();
for (let v47 = 0; v47 < 63; v47++) {
}
new f26(("LX").length, f3, "uMs");
typeof 1646 === "number";
const v56 = new Int16Array(1646);
const v58 = new Int32Array();
v58[108] = v44;
function f59(a60, a61) {
    const v63 = Math[4096];
    let {"byteLength":v64,"byteOffset":v65,} = v56;
    return v63;
}
for (let v66 = 0; v66 < 10; v66++) {
    const v70 = ("setYear")[v24];
    try { v24.m(v23, v23, v70); } catch (e) {}
}
gc();
