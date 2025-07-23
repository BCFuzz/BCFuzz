const v2 = new Uint8ClampedArray(1883);
const v4 = new Int16Array();
try { v4.set(v2); } catch (e) {}
gc();
