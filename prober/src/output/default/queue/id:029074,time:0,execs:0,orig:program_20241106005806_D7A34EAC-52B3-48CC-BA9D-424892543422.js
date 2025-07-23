function f1() {
    return 9;
}
const t3 = ("-789426228").constructor;
t3.toString = f1;
function f4(a5, a6) {
    const v9 = ("-789426228").constructor;
    return v9.fromCharCode(12, v9);
}
const v11 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v11, "valueOf", { writable: true, configurable: true, value: f4 });
const o21 = {
    n(a13, a14, a15) {
        const v16 = this;
        const t14 = v16.Intl.NumberFormat;
        t14().formatToParts(v11);
        return f1;
    },
};
const v22 = o21.n;
v22(9, "-789426228", v22, o21, v11);
gc();
