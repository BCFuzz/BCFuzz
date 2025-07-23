const v2 = new Uint8ClampedArray(55323);
try { v2.join(v2); } catch (e) {}
gc();
