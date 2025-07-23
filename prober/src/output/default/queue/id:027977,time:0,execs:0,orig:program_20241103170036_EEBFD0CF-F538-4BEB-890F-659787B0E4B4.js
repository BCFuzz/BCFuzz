function f0() {
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i13 = 0, i14 = 10;
    (() => {
        for (let [i27, i28] = (() => {
                for (let v15 = 0; v15 < 25; v15++) {
                    function f16() {
                        const o17 = {
                        };
                        function f18() {
                            return f0;
                        }
                        function f19(a20) {
                            return o17;
                        }
                        Object.defineProperty(o17, "next", { enumerable: true, get: f18, set: f19 });
                        return o17;
                    }
                    Float32Array[Symbol.iterator] = f16;
                    try { Float32Array.from(Float32Array); } catch (e) {}
                }
                return [0, 10];
            })();
            i28;
            i28--) {
        }
        return i13 < i14;
    })();
    i14--) {
}
gc();
