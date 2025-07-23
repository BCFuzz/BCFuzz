const v0 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
function f1(a2, a3) {
    let v4 = "0o5";
    for (let [i8, i9] = (() => {
            const v7 = v4 + -19082;
            v4 = v7;
            return [0, v7];
        })();
        i9--, i9;
        ) {
    }
    return v4;
}
v0[Symbol.toPrimitive] = f1;
const o26 = {
    n(a18, a19, a20) {
        const v21 = this;
        const t17 = v21.Intl.NumberFormat;
        return t17().formatToParts(v0);
    },
};
const t21 = o26.n;
t21();
gc();
