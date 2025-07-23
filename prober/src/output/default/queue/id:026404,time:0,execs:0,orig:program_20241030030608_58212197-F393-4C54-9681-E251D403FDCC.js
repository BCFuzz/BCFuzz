const o8 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.RelativeTimeFormat;
        const v7 = new v6(a1, a2, a3, v6);
        return v7;
    },
};
const t8 = o8.n;
const v10 = t8();
const v11 = v10.format;
try { v11.call(v10); } catch (e) {}
gc();
