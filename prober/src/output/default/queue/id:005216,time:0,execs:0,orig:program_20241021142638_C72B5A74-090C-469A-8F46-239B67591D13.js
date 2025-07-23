const t0 = ("valueOf").constructor;
const v3 = new t0();
const v5 = Symbol.toPrimitive;
v3[v5] = Array;
try { v3.toLocaleUpperCase(v5, Symbol); } catch (e) {}
gc();
