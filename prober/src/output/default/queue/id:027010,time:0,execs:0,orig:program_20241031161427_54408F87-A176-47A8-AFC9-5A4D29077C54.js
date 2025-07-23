const v1 = new BigUint64Array();
function f2(a3) {
    return a3;
}
Object.defineProperty(v1, "constructor", { configurable: true, enumerable: true, get: BigUint64Array, set: f2 });
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    try { a6.slice(); } catch (e) {}
}
new F4(v1);
gc();
