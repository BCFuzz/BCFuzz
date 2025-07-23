const v2 = createGlobalObject();
const v3 = v2.Float16Array;
v3.toString = Symbol;
const v4 = new v3(v3, Symbol, v2, Symbol, v3);
try { v4.slice(v3); } catch (e) {}
gc();
