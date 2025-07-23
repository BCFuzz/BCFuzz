const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v7 = v5.Intl.RelativeTimeFormat;
        v7.numberingSystem = "10000";
        new v7(v7, v7);
        return "10000";
    },
};
const t9 = o9.n;
t9();
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
