function f0(a1, a2) {
    const v3 = [-2147483648,1073741825,4294967295,-1810460340];
    let v4 = 12;
    v4++;
    const v7 = ("-789426228").constructor;
    return v7.fromCharCode(v4, v7, v3, "-789426228");
}
const v9 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v9, "valueOf", { writable: true, configurable: true, value: f0 });
const o19 = {
    n(a11, a12, a13) {
        const v14 = this;
        const t12 = v14.Intl.NumberFormat;
        t12().formatToParts(v9);
        return f0;
    },
};
const t17 = o19.n;
t17();
gc();
