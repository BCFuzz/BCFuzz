const v2 = new FinalizationRegistry(FinalizationRegistry);
try { v2.register("number"); } catch (e) {}
gc();
