const v3 = new FinalizationRegistry(Int8Array);
const v4 = v3.register;
try { v4.call("ts"); } catch (e) {}
gc();
