let v0 = [3.0,-1000000000000.0,0.6837663911566816,-2.2250738585072014e-308];
const v1 = v0--;
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v8 = v6.Intl.DateTimeFormat;
        v8.calendar = v0;
        v8.numberingSystem = v1;
        v8(a4, v8);
        return v0;
    },
};
const t12 = o10.n;
t12();
gc();
