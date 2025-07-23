const v2 = new Uint8ClampedArray(3);
const o11 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v9 = v7.Intl.Collator;
        try { v9.supportedLocalesOf(v2); } catch (e) {}
        return 3;
    },
};
const t9 = o11.n;
t9();
gc();
