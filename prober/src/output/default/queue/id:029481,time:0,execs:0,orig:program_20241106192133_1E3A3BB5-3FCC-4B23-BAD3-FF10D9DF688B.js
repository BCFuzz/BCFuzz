const o0 = {
};
const v1 = o0 + o0;
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        v7.numeric = a3;
        const v8 = v7.RelativeTimeFormat;
        new v8(v8, v7);
        return a4;
    },
};
const v11 = o10.n;
try { v11(v1); } catch (e) {}
gc();
