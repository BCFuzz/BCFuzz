const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v7 = v5.Collator.prototype;
        v7.resolvedOptions(a3, v5, v7);
        return a1;
    },
};
const v10 = o9.n;
try { v10(); } catch (e) {}
gc();
