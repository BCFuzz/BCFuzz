const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const v4 = new BigInt64Array(12);
const o13 = {
    n(a6, a7, a8) {
        const v9 = this;
        const t5 = v9.Intl.NumberFormat;
        t5(a8);
        return v4;
    },
};
const v14 = o13.n;
try { v14(o13, v1, v4); } catch (e) {}
gc();
