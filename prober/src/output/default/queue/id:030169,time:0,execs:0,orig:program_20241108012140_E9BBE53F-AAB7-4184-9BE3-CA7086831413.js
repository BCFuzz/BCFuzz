function f0(a1, a2) {
    [-2147483648,1073741825,4294967295,-1810460340];
    Date(a1);
    const v7 = new Map();
    const v8 = [-4.601182938700868,-406438.47779746726,798121.8354213496,9.113700644422833e+307,1e-15,851905.8547400481];
    v8.constructor = Date;
    const v9 = v8.constructor;
    const v10 = v9(Map);
    const v11 = v10.__proto__;
    for (let v12 = 0; v12 < 25; v12++) {
        const v14 = "14tT3" + v12;
        v14 in v11;
        v11[v14] = v12;
        const v16 = [7,2,2147483649,1127304451];
        function f17() {
            v16.length ||= v11;
            return v12;
        }
        Symbol.toPrimitive;
        new ArrayBuffer(v10, v7);
        Symbol.toPrimitive;
        function f23(a24) {
            return Symbol;
        }
        class C25 extends f23 {
        }
        for (let v26 = 0; v26 < 5; v26++) {
        }
        for (let i29 = 0, i30 = 10; i29 !== i30; i30--) {
        }
        for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
        }
    }
    for (let i49 = 0, i50 = 10; i49 < i50; i50--) {
    }
    return v9;
}
const v57 = [1000000000000.0,-7.922751898307034e+307,6.793617118805987,5.0,1.0,163.81546837596466,-1000000000000.0,-568.2743680577324];
Object.defineProperty(v57, "valueOf", { writable: true, configurable: true, value: f0 });
const o67 = {
    n(a59, a60, a61) {
        const v62 = this;
        const v64 = v62.Intl.NumberFormat;
        return v64(v62, this, v64, a59, v62).formatToParts(v57);
    },
};
const t46 = o67.n;
t46();
gc();
