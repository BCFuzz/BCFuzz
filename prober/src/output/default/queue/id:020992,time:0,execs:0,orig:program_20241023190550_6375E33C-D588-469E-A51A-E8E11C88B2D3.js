class C1 extends Date {
}
const v2 = new C1();
const o11 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v9 = v7.Intl.RelativeTimeFormat;
        v9.numberingSystem = v2;
        new v9(v9, v9);
        return a6;
    },
};
const v12 = o11.n;
try { v12(); } catch (e) {}
gc();
