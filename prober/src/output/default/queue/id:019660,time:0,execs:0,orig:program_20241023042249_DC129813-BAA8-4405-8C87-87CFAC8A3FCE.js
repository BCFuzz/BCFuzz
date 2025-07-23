class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const v6 = new Uint16Array();
    v6.constructor = f2;
    return v6.subarray(a3);
}
v1.f = f2;
const v8 = v1.f;
v8[Symbol.species] = f2;
try { v8(); } catch (e) {}
gc();
