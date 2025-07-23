class C0 {
}
function f1() {
    return f1;
}
const v2 = new C0();
function f3(a4, a5) {
    const v7 = new Float32Array(a5, a5, a4);
    v7.constructor = f3;
    v7.subarray();
    return f3;
}
f3[Symbol.species] = f1;
v2.constructor = f3;
const v11 = v2.constructor;
try { v11(); } catch (e) {}
gc();
