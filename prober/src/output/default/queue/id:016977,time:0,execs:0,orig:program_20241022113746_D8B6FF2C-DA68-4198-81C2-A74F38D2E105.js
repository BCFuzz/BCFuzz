const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        v6.length = 11n;
        const v7 = v6.DisplayNames;
        let v8;
        try { v8 = new v7(v6); } catch (e) {}
        return v8;
    },
};
const t11 = o9.n;
t11();
gc();
