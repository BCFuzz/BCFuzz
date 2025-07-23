class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const v6 = Float32Array.name;
    const v7 = new Float32Array(a3);
    v7.constructor = v6;
    v7.subarray();
    return a4;
}
v1.constructor = f2;
const v9 = v1.constructor;
try { v9(); } catch (e) {}
gc();
