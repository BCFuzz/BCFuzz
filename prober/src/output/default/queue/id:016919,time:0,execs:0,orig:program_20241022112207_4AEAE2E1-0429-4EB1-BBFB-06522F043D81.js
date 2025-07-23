const v1 = new Date();
const o11 = {
    n(a3, a4, a5) {
        const v6 = this;
        const t4 = v6.Intl.NumberFormat;
        return t4().formatToParts(a3);
    },
};
const t8 = o11.n;
t8(v1);
gc();
