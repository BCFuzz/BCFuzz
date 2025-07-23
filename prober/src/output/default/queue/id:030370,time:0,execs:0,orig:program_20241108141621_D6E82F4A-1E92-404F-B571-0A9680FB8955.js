const v0 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
function f1(a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F4();
    let v9 = "0o5";
    for (let [i13, i14] = (() => {
            const v12 = v9 + 10;
            v9 = v12;
            return [0, v12];
        })();
        (() => {
            for (let i17 = 0, i18 = 10; i14--, i17 < v8;) {
            }
            return i14;
        })();
        ) {
    }
    return v9;
}
v0[Symbol.toPrimitive] = f1;
const o40 = {
    n(a32, a33, a34) {
        const v35 = this;
        const t25 = v35.Intl.NumberFormat;
        t25().formatToParts(v0);
        return this;
    },
};
const v41 = o40.n;
v41(v41, o40);
gc();
