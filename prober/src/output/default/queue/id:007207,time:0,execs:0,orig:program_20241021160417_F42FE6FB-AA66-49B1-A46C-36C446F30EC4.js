const v1 = [-9007199254740990];
try { new WeakSet(v1); } catch (e) {}
gc();
