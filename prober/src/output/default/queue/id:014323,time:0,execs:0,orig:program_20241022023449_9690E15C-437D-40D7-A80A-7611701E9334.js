class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5, a6) {
    return C0;
}
function F7() {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F7();
const v11 = [-1.7976931348623157e+308,-7.457131498516718e+307,0.12292649184980797,2.2250738585072014e-308];
const v13 = new Uint8ClampedArray();
for (let v14 = 0; v14 < 5; v14++) {
    const v15 = /(8)/dygu;
    class C16 {
        constructor(a18, a19, a20, a21) {
            try { this.constructor(a18, a20); } catch (e) {}
            a18.toString(a19, a20);
        }
    }
    new C16(v15);
    const v25 = new C16(v13);
    const t22 = v25.constructor;
    new t22(v14);
    const t24 = v25.constructor;
    const v29 = new t24(129);
    const t26 = v29.constructor;
    new t26(v13);
    const v32 = new C16(v15);
    const t29 = v32.constructor;
    new t29(v9);
    const v35 = v32.constructor;
    new v35(v1);
    const v37 = new v35(v11);
    const t34 = v37.constructor;
    new t34(v37);
    const v40 = new v35(v14);
    const v41 = v40.constructor;
    new v41(f2);
    const v43 = new v41(v41);
    const t40 = v43.constructor;
    new t40(v43);
    const v46 = new v41(v25);
    const t43 = v46.constructor;
    new t43(v40);
}
gc();
