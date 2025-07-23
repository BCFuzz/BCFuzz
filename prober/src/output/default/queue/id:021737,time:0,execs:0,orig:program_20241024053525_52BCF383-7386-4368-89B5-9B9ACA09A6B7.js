class C1 {
}
const v2 = new C1();
const v3 = v2.constructor;
function f4(a5, a6, a7, a8) {
    const v9 = a5 + a5;
    const t6 = a7.constructor;
    t6(v9);
    return v3;
}
try { f4(v3, Uint32Array, v3); } catch (e) {}
gc();
