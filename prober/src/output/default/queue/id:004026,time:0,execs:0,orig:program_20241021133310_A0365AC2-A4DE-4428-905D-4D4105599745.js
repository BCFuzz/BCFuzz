const v2 = createGlobalObject().BigInt;
try { new v2(); } catch (e) {}
gc();
