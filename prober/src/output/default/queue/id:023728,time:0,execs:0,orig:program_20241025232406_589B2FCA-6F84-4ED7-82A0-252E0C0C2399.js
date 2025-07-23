class C1 {
}
const v2 = new C1();
function f3(a4, a5) {
    const v6 = new BigUint64Array(a4, a4, a5);
    v6.constructor = f3;
    return v6.subarray(a5, a5);
}
function f8() {
    return f3;
}
function f9(a10) {
    return f8;
}
Object.defineProperty(f3, Symbol.species, { enumerable: true, get: f8, set: f9 });
v2.constructor = f3;
const v13 = v2.constructor;
try { v13(); } catch (e) {}
gc();
