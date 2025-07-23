const v2 = new Int16Array();
const v4 = new Uint8ClampedArray();
try { v4.set(v2, 1000); } catch (e) {}
gc();
