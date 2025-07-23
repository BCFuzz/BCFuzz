function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    class C10 extends Uint32Array {
    }
    const v11 = C10.name;
    for (let i14 = 0, i15 = 10;
        (() => {
            const v18 = v11 / -4096;
            Number.isNaN();
            ~Math.max(v2, Uint32Array, v11 << v18);
            i15--;
            return i14 < i15;
        })();
        ) {
    }
}
const v30 = new F3(F3, F0, v2, F3);
const v31 = v30.constructor;
new v31(v31, F0, v2, F3);
gc();
