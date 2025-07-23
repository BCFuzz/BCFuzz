function f1(a2, a3) {
    const v4 = [-2147483648,1073741825,4294967295,-1810460340];
    function f5(a6) {
        for (let i10 = 0, i11 = 10 + 10; i11--, i11;) {
        }
        return -215851621;
    }
    v4.valueOf = f5;
    let v17 = 12;
    v17++;
    const v20 = ("-789426228").constructor;
    return v20.fromCharCode(v17, v20, v4, v17);
}
const v22 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v22, "valueOf", { writable: true, configurable: true, value: f1 });
const o30 = {
    n(a24, a25, a26) {
        const v27 = this;
        const v28 = v27.BigInt;
        try { v28.asUintN(a25, a25); } catch (e) {}
        return -215851621;
    },
};
const t23 = o30.n;
t23(o30, v22);
gc();
