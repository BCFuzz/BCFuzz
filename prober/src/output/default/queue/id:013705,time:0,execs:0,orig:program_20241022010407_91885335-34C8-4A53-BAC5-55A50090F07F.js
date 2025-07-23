const v2 = new FinalizationRegistry(FinalizationRegistry);
try { v2.unregister("a"); } catch (e) {}
gc();
