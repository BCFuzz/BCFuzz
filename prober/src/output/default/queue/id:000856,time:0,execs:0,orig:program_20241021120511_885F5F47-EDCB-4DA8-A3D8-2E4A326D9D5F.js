const v2 = new Uint8ClampedArray("c", "c", "c");
try { v2.sort("c"); } catch (e) {}
gc();
