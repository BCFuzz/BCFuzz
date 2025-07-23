function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    return "number";
}
f3.granularity = "number";
const o12 = {
    n(a5, a6, a7) {
        const v8 = this;
        const v10 = v8.Intl.Segmenter;
        new v10(this, a6);
        return v10;
    },
};
const v13 = o12.n;
try { v13(F0, f3); } catch (e) {}
gc();
