const v1 = Map.prototype;
try { v1.delete(); } catch (e) {}
gc();
