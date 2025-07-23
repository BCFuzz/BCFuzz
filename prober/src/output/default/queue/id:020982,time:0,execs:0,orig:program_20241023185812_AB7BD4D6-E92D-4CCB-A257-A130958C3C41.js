class C0 {
}
class C1 extends C0 {
    toString(a3, a4, a5, a6) {
        return C0;
    }
}
const v7 = new C1();
const o15 = {
    n(a9, a10, a11) {
        a10.length = a10;
        try { a11(v7, v7, a9); } catch (e) {}
        const t12 = this.Int32Array;
        new t12(a11);
        return C0;
    },
};
const v16 = o15.n;
v16(v16, o15, v16);
gc();
