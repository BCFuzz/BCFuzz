const o11 = {
    n(a2, a3, a4) {
        try { a3("p"); } catch (e) {}
        const v6 = this;
        const t4 = v6.Intl.RelativeTimeFormat;
        const v9 = new t4();
        try { v9.format(a2, a2); } catch (e) {}
        return a2;
    },
};
const v12 = o11.n;
v12(o11, v12);
gc();
