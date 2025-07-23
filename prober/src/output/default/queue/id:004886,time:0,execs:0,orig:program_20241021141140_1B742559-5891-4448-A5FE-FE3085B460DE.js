function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
function f5(a6) {
    return F0;
}
v4[Symbol.toPrimitive] = f5;
const v10 = new Uint32Array();
try { v10.with(v4); } catch (e) {}
gc();
