class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const v6 = new Float32Array(a3, a3, a4);
    v6.constructor = f2;
    v6.subarray();
    return C0;
}
v1.constructor = f2;
const v8 = v1.constructor;
v8[Symbol.species] = f2;
try { v8(); } catch (e) {}
gc();
