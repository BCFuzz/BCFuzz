const v3 = createGlobalObject().WeakRef;
try { new v3("o"); } catch (e) {}
gc();
