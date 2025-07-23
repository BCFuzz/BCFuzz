const v2 = new FinalizationRegistry(Int8Array);
v2.unregister(FinalizationRegistry);
gc();
