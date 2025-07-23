function f0(a1, a2) {
    const v3 = [-2147483648,1073741825,4294967295,-1810460340];
    let v4 = 12;
    v4++;
    const v7 = ("-789426228").constructor;
    function f8(a9, a10) {
        for (let i13 = 10, i14 = 10; -13369 < i14; i14--) {
        }
        return -13369;
    }
    v7[Symbol.toPrimitive] = f8;
    return v7.fromCharCode(v4, v7, v3, v4);
}
const v24 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v24, "valueOf", { writable: true, configurable: true, value: f0 });
const o34 = {
    n(a26, a27, a28) {
        const v29 = this;
        const t18 = v29.Intl.NumberFormat;
        t18().formatToParts(v24);
        return a26;
    },
};
const v35 = o34.n;
v35(v35, f0, v35, v35);
gc();
