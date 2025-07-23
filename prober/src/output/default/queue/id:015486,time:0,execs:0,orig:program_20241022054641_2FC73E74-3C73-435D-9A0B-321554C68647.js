const v2 = new SharedArrayBuffer();
const v4 = new Uint8ClampedArray();
const v5 = v4.constructor;
try { new v5(v2, 119); } catch (e) {}
gc();
