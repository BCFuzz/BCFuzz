for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10;
            (() => {
                const o32 = {
                    set b(a19) {
                        for (let v20 = 0; v20 < 10; v20++) {
                            function f21() {
                                const o22 = {
                                };
                                function f23() {
                                    BigInt64Array.toString(BigInt64Array, f23, f11);
                                }
                                function f26(a27) {
                                    return f11;
                                }
                                Object.defineProperty(o22, "next", { enumerable: true, get: f23, set: f26 });
                                return o22;
                            }
                            Float32Array[Symbol.iterator] = f21;
                            try { Float32Array.from(Float32Array); } catch (e) {}
                        }
                    },
                };
                o32.b = o32;
                return i16 < i17;
            })();
            i17--) {
        }
        return a12;
    }
    f11();
`;
for (let i42 = 0, i43 = 10; i42 < i43; i43--) {
    for (let i52 = 0, i53 = 10; i52 < i53; i53--) {
    }
}
eval(v10).next(v10);
gc();
