const o10 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.NumberFormat;
        t3().format("-2");
        return "-2";
    },
};
const t8 = o10.n;
t8();
gc();
