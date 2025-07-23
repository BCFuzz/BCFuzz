const v1 = `m${[]}6`;
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v8 = v6.Intl.DateTimeFormat;
        v8.weekday = v1;
        v8(a4, v8);
        return v6;
    },
};
const v11 = o10.n;
try { v11(); } catch (e) {}
gc();
