function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
function f5(a6, a7) {
    return v4.valueOf;
}
BigInt64Array.toString = f5;
const v11 = new Uint32Array(v4, Uint32Array, Uint32Array);
try { v11.slice(v4, BigInt64Array); } catch (e) {}
gc();
