function f0(a1) {
    a1.name = a1;
    const o8 = {
        n(a3, a4) {
            for (let i = 0; i < 5; i++) {
                for (let v5 = 0; v5 < 250; v5++) {
                }
                this[Symbol.toPrimitive] = a1;
            }
            return a1;
        },
    };
    function f9() {
        return f0;
    }
    function f10(a11) {
        return a11.length;
    }
    Object.defineProperty(o8, Symbol.toPrimitive, { configurable: true, get: f9, set: f10 });
    o8.n(f0);
    return o8;
}
const v16 = f0(f0);
const v17 = v16.n();
const v18 = f0(v16);
function f19(a20, a21) {
    const v22 = a20.n();
    v22.length = v22;
    a20.n(f19, v22, v17);
    return f0;
}
const t31 = f19(v16);
t31(v16);
const t32 = f19(v18);
t32(v16);
gc();
