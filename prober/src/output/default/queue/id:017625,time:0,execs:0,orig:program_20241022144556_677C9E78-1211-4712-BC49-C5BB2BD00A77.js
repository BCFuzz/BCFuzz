const o6 = {
    valueOf(a1, a2, a3) {
        return delete a3[new.target];
    },
};
const o16 = {
    n(a8, a9, a10) {
        const v11 = this;
        const v12 = v11.Intl;
        const v13 = v12.DateTimeFormat;
        const v14 = v13(a8, v13, this, a9);
        try { v14.formatRangeToParts(v14, o6); } catch (e) {}
        return v12;
    },
};
const t15 = o16.n;
t15(o6, o16, o6);
gc();
