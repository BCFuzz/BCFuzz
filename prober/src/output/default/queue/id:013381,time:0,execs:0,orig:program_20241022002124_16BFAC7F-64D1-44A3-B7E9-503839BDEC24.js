const v1 = new BigInt64Array();
const v3 = v1[256];
const o11 = {
    n(a5, a6, a7) {
        const v8 = this;
        const v9 = v8.Intl;
        try { v9.supportedValuesOf(v3); } catch (e) {}
        return v9;
    },
};
const t10 = o11.n;
t10();
gc();
