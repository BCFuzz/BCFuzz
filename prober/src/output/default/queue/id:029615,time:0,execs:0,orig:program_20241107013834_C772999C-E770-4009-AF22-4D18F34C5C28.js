const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.RelativeTimeFormat;
        const v7 = new t3();
        const v8 = v7.resolvedOptions;
        v8(this, v4);
        return v8;
    },
};
const v11 = o10.n;
try { v11(); } catch (e) {}
gc();
