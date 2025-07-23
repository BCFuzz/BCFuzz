const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v6 = v5.DateTimeFormat;
        const v7 = v6(v5, v5, v6, v6);
        v7.format();
        return v7;
    },
};
const v10 = o9.n;
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
v10().format();
gc();
