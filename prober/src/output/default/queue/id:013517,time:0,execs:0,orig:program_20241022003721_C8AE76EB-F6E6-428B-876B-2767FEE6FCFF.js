const v0 = /uqw3+/mdvis;
function f1(a2) {
    v0 | a2;
    return f1;
}
v0[Symbol.toPrimitive] = f1;
const o15 = {
    n(a7, a8, a9) {
        const v10 = this;
        const t9 = v10.Intl.Segmenter;
        const v13 = new t9(v10, a9);
        try { v13.segment(v0); } catch (e) {}
        return f1;
    },
};
const t15 = o15.n;
t15();
gc();
