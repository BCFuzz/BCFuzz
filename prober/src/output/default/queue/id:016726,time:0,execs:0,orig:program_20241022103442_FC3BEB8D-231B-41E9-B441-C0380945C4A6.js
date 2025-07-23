const v1 = new Int8Array();
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const t4 = v6.Intl.RelativeTimeFormat;
        const v9 = new t4();
        return v9;
    },
};
const v11 = o10.n;
const v12 = v11(v11);
try { v12.format(v1, v1); } catch (e) {}
gc();
