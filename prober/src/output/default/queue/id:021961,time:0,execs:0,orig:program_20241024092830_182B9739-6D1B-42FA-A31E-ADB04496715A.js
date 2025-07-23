class C0 {
}
const o11 = {
    n(a3, a4, a5) {
        a3[Symbol.toPrimitive] = Symbol;
        const v7 = this;
        const v8 = v7.Intl;
        v8.style = a3;
        const v9 = v8.RelativeTimeFormat;
        const v10 = new v9(v9, v8);
        return v10;
    },
};
const v12 = o11.n;
try { v12(C0); } catch (e) {}
gc();
