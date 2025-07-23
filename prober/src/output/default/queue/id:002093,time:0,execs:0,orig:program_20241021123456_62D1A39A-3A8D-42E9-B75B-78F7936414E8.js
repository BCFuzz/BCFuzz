const v2 = new Int8Array(512);
try { v2.reduce(Symbol); } catch (e) {}
gc();
