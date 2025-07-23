const v0 = [0,4294967297,9265434,-44859,-35673,-767304263,-2147483648,-2005227844,2147483649,255];
class C1 {
}
const v2 = new C1();
const o13 = {
    n(a4, a5, a6) {
        function f7(a8) {
            return v0;
        }
        a5.toString = f7;
        const v9 = this;
        const t11 = v9.Intl.Locale;
        const v12 = new t11(a5);
        return v12;
    },
};
const v14 = o13.n;
try { v14(v14, v2); } catch (e) {}
gc();
