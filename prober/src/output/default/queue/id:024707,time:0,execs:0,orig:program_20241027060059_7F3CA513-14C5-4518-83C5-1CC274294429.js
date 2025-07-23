const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v8 = v4.Intl.DisplayNames.prototype.resolvedOptions;
        try { v8(); } catch (e) {}
        return this;
    },
};
const v11 = o10.n;
v11(v11, o10);
gc();
