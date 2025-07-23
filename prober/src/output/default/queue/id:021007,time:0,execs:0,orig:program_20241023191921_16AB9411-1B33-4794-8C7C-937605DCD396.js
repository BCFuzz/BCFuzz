class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const v6 = new SharedArrayBuffer();
    const v8 = new DataView(v6);
    const t6 = v8.setFloat16;
    t6(v1, a4, v6, SharedArrayBuffer);
    return v6;
}
v1.constructor = f2;
const v12 = v1.constructor.prototype;
try { v12.constructor(); } catch (e) {}
gc();
