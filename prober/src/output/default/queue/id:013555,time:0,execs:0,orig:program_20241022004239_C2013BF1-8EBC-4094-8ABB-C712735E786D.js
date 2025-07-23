function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = [-1.7976931348623157e+308,-7.457131498516718e+307,0.12292649184980797,2.2250738585072014e-308];
const v7 = new Uint8ClampedArray("NaN", 129, 129);
for (let v9 = 0; v9 < 5; v9++) {
    const v10 = /(8)/dygu;
    class C11 {
        constructor(a13, a14, a15, a16) {
            a13.toString();
        }
    }
    const v18 = new C11(v7);
    const v19 = new C11(v10);
    const t15 = v19.constructor;
    new t15(v2);
    const v22 = v19.constructor;
    new v22(v4);
    const v24 = new v22(v9);
    const t20 = v24.constructor;
    new t20(v18);
    new v22("NaN");
    const t23 = v19.constructor;
    new t23(v19);
    const v30 = v19.constructor;
    const v31 = new v30(v30);
    const t27 = v31.constructor;
    new t27(129);
    const t29 = v19.constructor;
    new t29(255);
}
gc();
