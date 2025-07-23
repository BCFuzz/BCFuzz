function f1(a2, a3) {
    const v4 = [-2147483648,1073741825,4294967295,-1810460340];
    function f5(a6) {
        for (let i10 = 0, i11 = 10 + 10; i11--, i11;) {
        }
        return -215851621;
    }
    v4.valueOf = f5;
    const v19 = ("-789426228").constructor;
    return v19.fromCharCode(12, v19, v4, 12);
}
const v21 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v21, "valueOf", { writable: true, configurable: true, value: f1 });
const o29 = {
    n(a23, a24, a25) {
        const v26 = this;
        const v27 = v26.BigInt;
        try { v27.asUintN(a24, a24); } catch (e) {}
        return f1;
    },
};
const t21 = o29.n;
t21(o29, v21);
gc();
