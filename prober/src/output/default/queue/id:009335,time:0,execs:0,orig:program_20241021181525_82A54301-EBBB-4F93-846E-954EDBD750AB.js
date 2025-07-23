const v2 = new FinalizationRegistry(Int8Array);
v2.register(v2, FinalizationRegistry);
gc();
