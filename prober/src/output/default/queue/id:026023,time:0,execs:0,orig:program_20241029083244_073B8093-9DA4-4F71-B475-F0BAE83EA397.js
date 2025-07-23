function f1(a2, a3) {
    Function(a2);
    return Uint32Array;
}
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    a8[Symbol.toPrimitive] = f1;
    a8 + a8;
}
try { new F6(Uint32Array); } catch (e) {}
gc();
