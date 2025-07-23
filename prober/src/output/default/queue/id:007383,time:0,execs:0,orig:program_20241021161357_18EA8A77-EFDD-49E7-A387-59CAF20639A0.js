const v2 = createGlobalObject().Float16Array;
try { v2.call(v2); } catch (e) {}
gc();
