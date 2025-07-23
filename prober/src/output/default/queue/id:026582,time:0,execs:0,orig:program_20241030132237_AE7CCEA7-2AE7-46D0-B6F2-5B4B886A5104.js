const v1 = Symbol.for(Symbol);
const v4 = createGlobalObject().WeakRef;
try { new v4(v1); } catch (e) {}
gc();
