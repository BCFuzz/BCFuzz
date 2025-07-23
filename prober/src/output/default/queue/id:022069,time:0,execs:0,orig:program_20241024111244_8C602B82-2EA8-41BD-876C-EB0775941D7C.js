const v2 = new Uint8ClampedArray();
const v3 = v2.subarray;
try { v3.call(-2091495936n); } catch (e) {}
gc();
