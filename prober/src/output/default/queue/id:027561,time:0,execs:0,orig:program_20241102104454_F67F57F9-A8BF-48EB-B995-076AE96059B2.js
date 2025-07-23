const v1 = new WeakMap();
function f2(a3) {
    a3.name = a3;
    const o10 = {
        n(a5, a6) {
            for (let i = 0; i < 5; i++) {
                for (let v7 = 0; v7 < 250; v7++) {
                }
                this[Symbol.toPrimitive] = a3;
            }
            return a6;
        },
    };
    function f11() {
        return f11;
    }
    function f12(a13) {
        v1.get(a13);
        return WeakMap;
    }
    Object.defineProperty(o10, Symbol.toPrimitive, { configurable: true, get: f11, set: f12 });
    return o10;
}
const v17 = f2(f2);
const v18 = v17.n();
const v19 = f2(v17);
function f20(a21, a22) {
    a21.n(f20);
    a21.n(a22, f20, a21, v18, v17);
    return v17;
}
f20(v17);
f20(v19);
gc();
