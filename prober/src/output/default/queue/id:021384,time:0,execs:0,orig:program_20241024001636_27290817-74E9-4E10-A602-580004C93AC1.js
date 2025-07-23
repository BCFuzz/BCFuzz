class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const v6 = new Float32Array(v1, a4, a3);
    v6.constructor = f2;
    v6.subarray();
    return Float32Array;
}
function f8() {
    return f2;
}
function f9(a10) {
    return a10;
}
Object.defineProperty(f2, Symbol.species, { enumerable: true, get: f8, set: f9 });
v1.constructor = f2;
const v13 = v1.constructor;
try { v13(); } catch (e) {}
gc();
