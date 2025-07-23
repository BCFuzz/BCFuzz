class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    f2 ^= a4;
    const v6 = new Float32Array(a4, a3, a4);
    v6.constructor = f2;
    v6.subarray(f2, f2);
    return v1;
}
v1.constructor = f2;
const v8 = v1.constructor;
try { v8(); } catch (e) {}
gc();
