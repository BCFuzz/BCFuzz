function f2() {
    return 2450;
}
function f3(a4) {
    return f2;
}
Object.defineProperty(Int8Array, "granularity", { configurable: true, enumerable: true, get: f2, set: f3 });
const o13 = {
    n(a6, a7, a8) {
        const v9 = this;
        const v11 = v9.Intl.Segmenter;
        new v11(v11, Int8Array);
        return this;
    },
};
const v14 = o13.n;
try { v14(f2, f3, f3, f3); } catch (e) {}
gc();
