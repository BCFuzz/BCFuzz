const v3 = createGlobalObject().Float16Array;
try { new v3(2147483649); } catch (e) {}
gc();
