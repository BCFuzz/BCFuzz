function f1() {
    return 9;
}
const t3 = ("-789426228").constructor;
t3.toString = f1;
function f5(a6, a7) {
    const v8 = [-2147483648,1073741825,4294967295,-1810460340];
    function f9(a10) {
        for (let i14 = 0, i15 = 10 + 10; i15--, i15;) {
        }
        return -215851621;
    }
    v8.valueOf = f9;
    const v23 = ("-789426228").constructor;
    return v23.fromCharCode(12, v23, v8);
}
const v25 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v25, "valueOf", { writable: true, configurable: true, value: f5 });
const o35 = {
    n(a27, a28, a29) {
        const v30 = this;
        const t21 = v30.Intl.NumberFormat;
        t21().formatToParts(v25);
        return this;
    },
};
const t26 = o35.n;
t26();
gc();
