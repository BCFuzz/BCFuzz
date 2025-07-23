const v2 = new ArrayBuffer(5);
try { new Int16Array(v2, 5); } catch (e) {}
gc();
