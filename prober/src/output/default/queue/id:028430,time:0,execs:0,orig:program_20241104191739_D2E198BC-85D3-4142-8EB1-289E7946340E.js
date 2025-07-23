function f1(a2, a3) {
    return ("abs").constructor.fromCharCode();
}
const v7 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
v7.minimumSignificantDigits = 10;
Object.defineProperty(v7, "valueOf", { writable: true, configurable: true, value: f1 });
const o17 = {
    n(a9, a10, a11) {
        const v12 = this;
        const v13 = v12.Intl;
        const t10 = v13.NumberFormat;
        return t10(v13, v7).formatToParts(v7);
    },
};
const v18 = o17.n;
v18(v18, f1);
gc();
