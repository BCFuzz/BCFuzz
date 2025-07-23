function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Float32Array(255, a4, a3);
    class C10 {
        h = a5;
        constructor(a12, a13, a14) {
            a14 in v9;
        }
    }
    new C10(v9, a4, Float32Array);
    const v17 = new C10();
    const v18 = v17.h;
    const v19 = v17.constructor;
    new v19(255, a3, 255);
    new v19("string", F1, v18);
}
const v22 = new F1();
const v23 = new F1("string", v22, "string");
const t18 = v23.constructor;
new t18(v23);
gc();
