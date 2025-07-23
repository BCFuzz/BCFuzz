const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v7 = v5.Intl.Collator();
        v7.compare(a4);
        return v7;
    },
};
const v10 = o9.n;
const v11 = v10(o9, v10, 18, o9);
try { v11.compare(v10, 18); } catch (e) {}
gc();
