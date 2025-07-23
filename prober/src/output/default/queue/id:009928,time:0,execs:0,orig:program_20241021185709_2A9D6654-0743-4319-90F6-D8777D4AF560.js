const v2 = new FinalizationRegistry(Int8Array);
const v3 = v2.register;
try { v3(); } catch (e) {}
gc();
