const v2 = new SharedArrayBuffer(Symbol, Symbol);
v2.toString = Symbol;
try { new Int32Array(v2, 11, v2); } catch (e) {}
gc();
