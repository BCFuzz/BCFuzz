const o10 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.NumberFormat;
        t3().formatToParts(-9223372036854775807);
        return v5;
    },
};
const t8 = o10.n;
t8(-9223372036854775807, o10, o10, o10);
gc();
