const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v7 = v5.Intl.DisplayNames;
        v7.type = "fromEntries";
        try { new v7(a2, v7); } catch (e) {}
        return a4;
    },
};
const t9 = o9.n;
t9();
gc();
