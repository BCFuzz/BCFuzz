const v2 = new Int32Array(2003);
const o11 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v8 = v7.Intl;
        v8.Segmenter.supportedLocalesOf(v2);
        return v8;
    },
};
const v12 = o11.n;
try { v12(Int32Array, 2003, Int32Array, v12); } catch (e) {}
gc();
