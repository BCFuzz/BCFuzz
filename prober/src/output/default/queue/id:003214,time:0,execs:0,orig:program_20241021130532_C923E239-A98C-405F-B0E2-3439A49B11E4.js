const v2 = new Int16Array(10000, 10000, 10000);
try { v2.toSorted(10000); } catch (e) {}
gc();
