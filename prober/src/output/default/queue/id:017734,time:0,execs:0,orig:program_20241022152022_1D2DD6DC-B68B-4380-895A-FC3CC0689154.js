class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const v6 = new Float32Array(a3, a3, Float32Array);
    v6.constructor = f2;
    v6.subarray();
    return a4;
}
v1.constructor = f2;
const v8 = v1.constructor;
v8[Symbol.species] = f2;
try { v8(v1, f2, f2); } catch (e) {}
gc();
