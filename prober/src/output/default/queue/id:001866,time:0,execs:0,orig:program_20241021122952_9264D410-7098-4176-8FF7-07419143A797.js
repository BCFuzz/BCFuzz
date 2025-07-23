const v1 = Symbol.for(Symbol);
try { v1(); } catch (e) {}
gc();
