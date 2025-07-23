function f1(a2, a3) {
    a2();
    return Int8Array;
}
const v6 = Symbol.toPrimitive;
Int8Array[v6] = f1;
Int8Array.granularity = Int8Array;
const o15 = {
    n(a8, a9, a10) {
        const v11 = this;
        const v13 = v11.Intl.Segmenter;
        const v14 = new v13(v13, Int8Array);
        return v14;
    },
};
const v16 = o15.n;
try { v16(Int8Array, Symbol, v6); } catch (e) {}
gc();
