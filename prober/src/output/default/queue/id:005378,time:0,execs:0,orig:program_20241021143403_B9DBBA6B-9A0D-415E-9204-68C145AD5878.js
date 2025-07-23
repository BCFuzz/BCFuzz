const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v8 = a4.constructor;
    class C9 {
        get c() {
        }
    }
    const v11 = new C9();
    try { v11.constructor(v11); } catch (e) {}
    v11.c;
    return v8;
}
v2.map(f3);
gc();
