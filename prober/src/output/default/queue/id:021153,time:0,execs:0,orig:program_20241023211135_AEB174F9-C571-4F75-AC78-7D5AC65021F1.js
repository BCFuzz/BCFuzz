const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const t4 = v5.DateTimeFormat;
        const v8 = t4(v4, this).formatRange;
        v8(v8);
        return v5;
    },
};
const v11 = o10.n;
try { v11(o10, v11); } catch (e) {}
gc();
