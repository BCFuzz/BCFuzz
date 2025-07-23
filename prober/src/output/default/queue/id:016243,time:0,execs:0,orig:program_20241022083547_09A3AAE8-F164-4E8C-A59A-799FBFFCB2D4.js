function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new Int32Array(681);
function f6(a7, a8, a9, a10) {
    try { a9.constructor(a8, f6, a9, f6, f6); } catch (e) {}
    arguments[Symbol.toStringTag] = v2;
    const v16 = new BigUint64Array();
    v16.includes();
    return eval(a8);
}
v5.map(f6);
gc();
