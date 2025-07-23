function f1(a2) {
    a2(f1, a2, a2, a2, a2);
    return a2;
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this[Symbol.toPrimitive] = f1;
}
const v11 = new F4(Float64Array, F4, Float64Array);
const t9 = createGlobalObject().Float16Array;
const v15 = new t9();
try { v15.with(Float64Array, v11); } catch (e) {}
gc();
