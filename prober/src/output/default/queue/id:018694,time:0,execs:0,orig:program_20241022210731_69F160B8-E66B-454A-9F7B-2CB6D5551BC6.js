const v1 = Symbol.toPrimitive;
const o11 = {
    n(a3, a4, a5) {
        const v6 = this;
        const t4 = v6.Intl.RelativeTimeFormat;
        const v9 = new t4();
        let v10;
        try { v10 = v9.format(a4, v1); } catch (e) {}
        return v10;
    },
};
const t11 = o11.n;
t11();
gc();
