const v1 = [[]];
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v8 = v6.Intl.NumberFormat;
        let v9;
        try { v9 = v8.supportedLocalesOf(v1); } catch (e) {}
        return v9;
    },
};
const t10 = o10.n;
t10();
gc();
