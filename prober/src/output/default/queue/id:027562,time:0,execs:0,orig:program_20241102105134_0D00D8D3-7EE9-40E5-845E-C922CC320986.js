function f0(a1, a2) {
    const v3 = [-2147483648,1073741825,4294967295,-1810460340];
    const v6 = ("-789426228").constructor;
    return v6.fromCharCode(12, v6, v3, "-789426228");
}
const v8 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v8, "valueOf", { writable: true, configurable: true, value: f0 });
const o18 = {
    n(a10, a11, a12) {
        const v13 = this;
        const t10 = v13.Intl.NumberFormat;
        t10().formatToParts(v8);
        return a11;
    },
};
const v19 = o18.n;
v19(v19, o18);
gc();
