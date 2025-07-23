const v1 = Symbol.toStringTag;
const v3 = new Int32Array(Symbol, Symbol, Symbol);
try { v3.toSorted(v1); } catch (e) {}
gc();
