function f0() {
    return f0;
}
const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        const v7 = v6.DateTimeFormat;
        v7.dayPeriod = f0;
        v7(a3, v7);
        return v6;
    },
};
const v10 = o9.n;
try { v10(f0, f0, o9); } catch (e) {}
gc();
