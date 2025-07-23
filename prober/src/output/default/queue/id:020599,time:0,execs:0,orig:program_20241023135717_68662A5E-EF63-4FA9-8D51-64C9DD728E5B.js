function f1() {
    return Int8Array();
}
function f3(a4) {
    return f3;
}
Object.defineProperty(Int8Array, "granularity", { configurable: true, enumerable: true, get: f1, set: f3 });
const o13 = {
    n(a6, a7, a8) {
        const v9 = this;
        const v10 = v9.Intl;
        const v11 = v10.Segmenter;
        new v11(v11, Int8Array);
        return v10;
    },
};
const v14 = o13.n;
try { v14(); } catch (e) {}
gc();
