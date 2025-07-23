function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Float32Array();
    class C9 {
        constructor(a11, a12, a13) {
            a13 in v8;
        }
    }
    const v15 = new C9();
    const t9 = v15.constructor;
    new t9("toString", F1, "toString");
}
new F1(F1, "toString", F1, "toString");
new F1(F1, "toString", F1, F1);
gc();
