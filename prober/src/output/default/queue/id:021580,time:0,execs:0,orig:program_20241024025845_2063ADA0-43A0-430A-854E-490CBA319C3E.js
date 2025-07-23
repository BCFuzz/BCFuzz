function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = new Float32Array();
    class C15 {
        h = a10;
        constructor(a17, a18, a19) {
            a19 in v14;
            super.f = a10;
        }
    }
    const v23 = new C15(this, -3, a10);
    const v24 = new C15(Float32Array, v23, a10);
    const v25 = v24.h;
    const v26 = v24.constructor;
    new v26(v23, F6, "function");
    new v26(255, a8, 255);
    new v26("string", F6, v25);
}
const v30 = new F6();
const v31 = new F6("string", v30, "string");
const t20 = v31.constructor;
new t20();
gc();
