const v1 = [Int8Array,Int8Array];
const o10 = {
    n(a3, a4, a5) {
        a3.localeMatcher = v1;
        const v6 = this;
        const v8 = v6.Intl.Segmenter;
        new v8(v8, Int8Array);
        return a3;
    },
};
const v11 = o10.n;
try { v11(Int8Array); } catch (e) {}
gc();
