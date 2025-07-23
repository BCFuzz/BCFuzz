const o15 = {
    n(a2, a3, a4) {
        function f5(a6, a7) {
            return "e";
        }
        this[Symbol.toPrimitive] = f5;
        const v10 = this;
        const t7 = v10.Intl.NumberFormat;
        t7().formatToParts(this);
        return a4;
    },
};
const t12 = o15.n;
t12();
gc();
