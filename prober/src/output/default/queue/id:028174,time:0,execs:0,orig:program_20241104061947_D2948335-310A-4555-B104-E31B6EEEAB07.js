function f0(a1, a2) {
    return ("abs").constructor.fromCharCode(12);
}
const v7 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v7, "valueOf", { writable: true, configurable: true, value: f0 });
const o17 = {
    n(a9, a10, a11) {
        const v12 = this;
        const v13 = v12.Intl;
        const t9 = v13.NumberFormat;
        t9(v13, v7, f0, f0).formatToParts(v7);
        return a9;
    },
};
const v18 = o17.n;
v18(v18, v18, v18, v18, o17);
gc();
