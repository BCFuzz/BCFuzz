const v2 = new FinalizationRegistry(FinalizationRegistry);
const v3 = v2.constructor;
try { new v3("split"); } catch (e) {}
gc();
