for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    (() => {
        for (let [i26, i27] = (() => {
                for (let v14 = 0; v14 < 100; v14++) {
                    function f15() {
                        const o16 = {
                        };
                        function f17() {
                            return o16;
                        }
                        function f18(a19) {
                            return a19;
                        }
                        Object.defineProperty(o16, "next", { enumerable: true, get: f17, set: f18 });
                        return o16;
                    }
                    Float32Array[Symbol.iterator] = f15;
                    try { Float32Array.from(Float32Array); } catch (e) {}
                }
                return [0, 10];
            })();
            i27;
            i27--) {
        }
        return i12 < i13;
    })();
    i13--) {
}
gc();
