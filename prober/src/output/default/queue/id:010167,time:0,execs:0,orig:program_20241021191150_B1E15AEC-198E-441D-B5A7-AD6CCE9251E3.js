const v1 = Symbol.toPrimitive;
function f2(a3, a4, a5, a6) {
    return a3 + a3;
}
try { f2(v1); } catch (e) {}
gc();
