const v1 = Symbol.toPrimitive;
function f2(a3, a4, a5, a6) {
    a5 + a3;
    return f2;
}
try { f2(v1); } catch (e) {}
gc();
