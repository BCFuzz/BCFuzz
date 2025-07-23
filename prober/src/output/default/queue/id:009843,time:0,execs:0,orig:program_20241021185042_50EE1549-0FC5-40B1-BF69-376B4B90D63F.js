function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
const v3 = f0();
const v4 = f0();
class C5 {
    constructor(a7) {
        for (let v8 = 0; v8 < 100; v8++) {
            a7["p" + v8] = v8;
        }
    }
}
const v11 = new C5(v2);
const t16 = v11.constructor;
const v13 = new t16(v4);
const t18 = v13.constructor;
new t18(v13);
const v16 = new C5(v3);
const v17 = v16.__lookupGetter__;
try { v17(); } catch (e) {}
new C5(v2);
gc();
