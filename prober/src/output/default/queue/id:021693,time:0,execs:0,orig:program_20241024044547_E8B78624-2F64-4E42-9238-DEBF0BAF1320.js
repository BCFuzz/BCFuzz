class C1 extends Date {
}
const v2 = new C1();
function f3() {
    return Reflect.apply();
}
v2.toString = f3;
const o14 = {
    n(a7, a8, a9) {
        const v10 = this;
        const v12 = v10.Intl.RelativeTimeFormat;
        v12.numberingSystem = v2;
        new v12(v12, v12);
        return a7;
    },
};
const v15 = o14.n;
try { v15(); } catch (e) {}
gc();
