const o11 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.NumberFormat;
        const v7 = t3();
        gc();
        v7.format();
        return a3;
    },
};
const t10 = o11.n;
t10();
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
