function f1() {
    return 9;
}
const t3 = ("-789426228").constructor;
t3.toString = f1;
function f4(a5, a6) {
    const v8 = ("-789426228").constructor;
    return v8.fromCharCode("-789426228", v8);
}
const v10 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
v10.toString = f4;
const o20 = {
    n(a12, a13, a14) {
        const v15 = this;
        const t14 = v15.Intl.NumberFormat;
        t14().formatToParts(v10);
        return a12;
    },
};
const v21 = o20.n;
v21(o20, "-789426228", "-789426228", v21);
gc();
