class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5, a6) {
    return a6;
}
function F7() {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F7();
const v11 = new Uint8ClampedArray(v9);
for (let v12 = 0; v12 < 5; v12++) {
    const v13 = /(8)/dygu;
    class C14 {
        constructor(a16, a17, a18, a19) {
            a16.toString();
        }
    }
    new C14(v13);
    const v22 = new C14(v11);
    const v23 = v22.constructor;
    new v23(v12);
    const v25 = new C14(v13);
    const t23 = v25.constructor;
    new t23(v23);
    const t25 = v25.constructor;
    new t25(v9);
    const v30 = v25.constructor;
    new v30(v1);
    const v32 = new v30(v12);
    const v33 = v32.constructor;
    const v34 = new v33(f2);
    const v35 = new v33(v33);
    const t33 = v35.constructor;
    const v37 = new t33(v35);
    const t35 = v37.constructor;
    new t35(v34);
}
gc();
