for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
function f20(a21, a22) {
    let v23 = 12;
    v23++;
    return ("-789426228").constructor.fromCharCode(v23);
}
const v28 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v28, "valueOf", { writable: true, configurable: true, value: f20 });
const o38 = {
    n(a30, a31, a32) {
        const v33 = this;
        const v34 = v33.Intl;
        const v35 = v34.NumberFormat;
        return v35(v35, v34, a31, v28, f20).formatToParts(v28);
    },
};
const t19 = o38.n;
t19();
gc();
