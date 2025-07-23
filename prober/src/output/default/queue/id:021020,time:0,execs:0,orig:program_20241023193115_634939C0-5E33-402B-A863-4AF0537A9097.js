const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        v6.style = a2;
        const v7 = v6.RelativeTimeFormat;
        new v7(v7, v6);
        return this;
    },
};
const v10 = o9.n;
try { v10("6"); } catch (e) {}
gc();
