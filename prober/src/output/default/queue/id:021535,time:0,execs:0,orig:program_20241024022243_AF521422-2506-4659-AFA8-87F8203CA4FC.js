function f1(a2, a3, a4, a5) {
    return a2;
}
Object.defineProperty(f1, Symbol.species, { writable: true, value: 354.3441001359929 });
const v9 = new BigInt64Array();
v9.constructor = f1;
function f10() {
    v9.subarray();
    return Symbol;
}
try { f10(); } catch (e) {}
gc();
