const v3 = new Float32Array(2);
const v4 = v3.toSorted(Date);
const o13 = {
    n(a6, a7, a8) {
        const v9 = this;
        const v10 = v9.Intl;
        const t6 = v10.Locale;
        t6(v10, v10, a8, a6);
        return a8;
    },
};
const v14 = o13.n;
try { v14(v3, Float32Array, v4); } catch (e) {}
gc();
