function f0(a1, a2) {
    let v3 = 12;
    v3--;
    return ("abs").constructor.fromCharCode(v3);
}
const v8 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v8, "valueOf", { writable: true, configurable: true, value: f0 });
const o18 = {
    n(a10, a11, a12) {
        const v13 = this;
        const v14 = v13.Intl;
        const v15 = v14.NumberFormat;
        v15(v14, f0).formatToParts(v8);
        return v15;
    },
};
const t16 = o18.n;
t16();
gc();
