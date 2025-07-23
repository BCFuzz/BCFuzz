const v0 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
function f1(a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F4();
    for (let i13 = 0, i14 = "0o5" + 10;
        (() => {
            for (let i17 = 0, i18 = 10; i14--, i17 < v8;) {
            }
            return i14;
        })();
        ) {
    }
    return "0o5";
}
const v30 = Symbol.toPrimitive;
v0[v30] = f1;
const o40 = {
    n(a32, a33, a34) {
        const v35 = this;
        const t21 = v35.Intl.NumberFormat;
        return t21(this, a34).formatToParts(v0);
    },
};
const t25 = o40.n;
t25(v30, v30);
gc();
