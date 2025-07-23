const v0 = [-Infinity];
v0[0] = v0;
const o10 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t5 = v5.Intl.NumberFormat;
        return t5(a4, this).constructor();
    },
};
const t9 = o10.n;
t9().formatToParts(v0);
gc();
