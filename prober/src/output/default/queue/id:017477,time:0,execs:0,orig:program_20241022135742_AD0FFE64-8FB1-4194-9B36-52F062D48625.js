const v2 = new BigInt64Array(256);
function f5() {
    return f5;
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(v2, a9, { configurable: true, get: f5, set: f5 });
}
const v10 = new F6(12, BigInt64Array);
const v11 = v10.constructor;
try { new v11(Float64Array, 12); } catch (e) {}
gc();
