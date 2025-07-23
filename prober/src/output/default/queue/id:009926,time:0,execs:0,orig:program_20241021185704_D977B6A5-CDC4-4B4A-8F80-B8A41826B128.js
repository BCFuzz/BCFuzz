function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Float32Array(a3, a5, a6);
    v8.string = a5;
    class C9 {
        constructor(a11, a12, a13) {
            a13 in v8;
        }
    }
    const v15 = new C9("string", a3, C9);
    const t10 = v15.constructor;
    new t10("string", F1, "string");
}
const v18 = new F1();
new F1("string", v18, "string", "string");
gc();
