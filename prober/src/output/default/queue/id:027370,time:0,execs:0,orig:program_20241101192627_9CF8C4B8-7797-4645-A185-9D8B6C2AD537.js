const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v8 = v5.Collator.prototype.resolvedOptions;
        try { v8(this, this); } catch (e) {}
        return v5;
    },
};
const t9 = o10.n;
t9();
gc();
