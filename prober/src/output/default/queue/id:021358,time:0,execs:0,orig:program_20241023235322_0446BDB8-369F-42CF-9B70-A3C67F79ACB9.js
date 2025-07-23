function f0(a1, a2, a3, a4) {
    return f0;
}
function f5(a6, a7) {
    return f5;
}
Object.defineProperty(f0, Symbol.species, { writable: true, value: f5 });
const v11 = new BigInt64Array();
v11.constructor = f0;
function f12() {
    v11.subarray();
    return Symbol;
}
try { f12(); } catch (e) {}
gc();
