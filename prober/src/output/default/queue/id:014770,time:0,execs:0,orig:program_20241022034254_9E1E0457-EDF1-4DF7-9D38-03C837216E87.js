const v2 = createGlobalObject();
const v3 = v2.Float16Array;
const v4 = Symbol.toPrimitive;
v3[v4] = Symbol;
const v5 = new v3(Symbol, v4);
try { v5.slice(v2, v3); } catch (e) {}
gc();
