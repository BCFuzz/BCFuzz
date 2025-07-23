const o6 = {
    m(a3, a4) {
        return "string" * 0n;
    },
};
class C7 {
    constructor(a9, a10, a11, a12) {
        try { a12.m(); } catch (e) {}
    }
}
const v14 = new C7();
const v15 = new C7(0n, 0n, v14, o6);
const t12 = v15.constructor;
new t12(v14, v14, v14, o6);
gc();
