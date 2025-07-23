const o8 = {
    n(a1, a2, a3) {
        a1[1] = a2;
        const v4 = this;
        const v6 = v4.Intl.DisplayNames;
        try { new v6(a1); } catch (e) {}
        return this;
    },
};
const v9 = o8.n;
v9(v9);
gc();
