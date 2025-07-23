const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Set;
        v5.localeMatcher = v5;
        const v7 = v4.Intl.DisplayNames;
        let v8;
        try { v8 = new v7(a1, v5); } catch (e) {}
        return v8;
    },
};
const t11 = o9.n;
t11();
gc();
