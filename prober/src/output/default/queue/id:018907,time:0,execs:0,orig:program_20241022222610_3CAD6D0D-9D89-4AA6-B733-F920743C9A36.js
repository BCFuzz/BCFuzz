const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v7 = v5.DisplayNames.prototype;
        let v8;
        try { v8 = v7.resolvedOptions(a2, v5, a3); } catch (e) {}
        return v8;
    },
};
const t10 = o9.n;
t10();
gc();
