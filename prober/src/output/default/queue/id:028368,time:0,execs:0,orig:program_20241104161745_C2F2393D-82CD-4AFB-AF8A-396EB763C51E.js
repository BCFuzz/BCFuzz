const v1 = Symbol.for(Symbol);
const v4 = new FinalizationRegistry(Int8Array);
try { v4.unregister(v1); } catch (e) {}
gc();
