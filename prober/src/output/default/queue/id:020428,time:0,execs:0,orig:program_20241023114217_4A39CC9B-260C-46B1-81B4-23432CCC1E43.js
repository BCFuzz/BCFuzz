const v2 = new Int8Array();
v2.toString = Date;
const o11 = {
    n(a4, a5, a6) {
        const v7 = this;
        const t5 = v7.Intl.RelativeTimeFormat;
        const v10 = new t5();
        return v10;
    },
};
const t10 = o11.n;
const v13 = t10();
try { v13.format(v2, v2); } catch (e) {}
gc();
