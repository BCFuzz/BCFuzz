const v0 = [2.0];
const o15 = {
    n(a2, a3, a4) {
        const v5 = this;
        const v6 = v5.Intl;
        function f7(a8, a9) {
            return v0;
        }
        Object.defineProperty(v6, Symbol.toPrimitive, { value: f7 });
        const v12 = v6.NumberFormat;
        const v13 = v12(v12, this, v6, v0, v12);
        try { v13.format(v6); } catch (e) {}
        return v12;
    },
};
const t15 = o15.n;
t15();
gc();
