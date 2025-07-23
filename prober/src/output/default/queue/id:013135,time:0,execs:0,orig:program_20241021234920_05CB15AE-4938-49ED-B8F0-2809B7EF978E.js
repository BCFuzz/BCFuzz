function f0(a1) {
    const o10 = {
        n(a3, a4) {
            for (let i = 0; i < 5; i++) {
                for (let v5 = 0; v5 < 250; v5++) {
                    v5++;
                    v5--;
                }
                this[Symbol.toPrimitive] = a1;
            }
            return this;
        },
    };
    function f11() {
        return f11;
    }
    function f12(a13) {
        return a13;
    }
    Object.defineProperty(o10, Symbol.toPrimitive, { configurable: true, get: f11, set: f12 });
    o10.n(f0);
    return o10;
}
const v17 = f0(f0);
const v18 = f0(v17);
function f19(a20, a21) {
    return a20.n();
}
f19(v17);
f19(v18);
gc();
