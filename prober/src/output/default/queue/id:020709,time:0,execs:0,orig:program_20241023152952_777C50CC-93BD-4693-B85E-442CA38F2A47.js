const v1 = new FinalizationRegistry(FinalizationRegistry);
try { v1.register(v1, "iterator", "iterator"); } catch (e) {}
gc();
