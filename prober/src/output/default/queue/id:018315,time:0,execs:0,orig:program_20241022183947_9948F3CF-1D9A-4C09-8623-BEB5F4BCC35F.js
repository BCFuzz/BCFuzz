function f1() {
    return f1;
}
function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6) {
            a6.name = a6;
            const o15 = {
                n(a8, a9) {
                    for (let i = 0; i < 5; i++) {
                        for (let v10 = 0; v10 < 250; v10++) {
                            v10++;
                            v10--;
                        }
                        this[Symbol.toPrimitive] = a6;
                    }
                    return a6;
                },
            };
            function f16() {
                return o15;
            }
            function f17(a18) {
                return a3;
            }
            Object.defineProperty(o15, Symbol.toPrimitive, { configurable: true, get: f16, set: f17 });
            o15.n();
            return o15;
        }
        const v22 = f5(f5);
        f5(v22);
        v22.n();
    }
    return f2;
}
Object.defineProperty(Uint8ClampedArray, "toString", { enumerable: true, get: f1, set: f2 });
Uint8ClampedArray.toString = f1;
gc();
