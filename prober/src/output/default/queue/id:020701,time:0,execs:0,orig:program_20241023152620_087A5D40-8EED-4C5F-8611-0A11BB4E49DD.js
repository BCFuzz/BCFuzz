function f1() {
    const o2 = {
    };
    return o2;
}
const v3 = f1();
const v4 = f1();
const v5 = f1();
class C6 {
    constructor(a8) {
        for (let v9 = 0; v9 < 25; v9++) {
            a8["p" + v9] = v9;
        }
    }
}
const v12 = new C6(v3);
const t16 = v12.constructor;
const v14 = new t16(v5);
const t18 = v14.constructor;
new t18(f1);
const v17 = new C6(v4);
const v18 = v17.constructor;
try { new v18(-65535n); } catch (e) {}
gc();
