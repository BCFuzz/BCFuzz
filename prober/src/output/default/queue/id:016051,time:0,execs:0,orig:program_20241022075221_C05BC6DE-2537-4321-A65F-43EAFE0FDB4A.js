const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v6 = v5.DateTimeFormat;
        v6(v4, v5, a1, v4, a2).format(a1);
        return v6;
    },
};
for (let i12 = 0, i13 = 10; i13; i13--) {
}
const t11 = o9.n;
t11();
gc();
