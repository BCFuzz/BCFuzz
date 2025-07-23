const v1 = 4.0 - 4.0;
const v4 = new FinalizationRegistry(Int8Array);
try { v4.register(v1); } catch (e) {}
gc();
