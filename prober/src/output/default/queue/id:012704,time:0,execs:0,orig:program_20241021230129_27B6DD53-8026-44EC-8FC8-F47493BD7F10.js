const v2 = new ArrayBuffer();
const v4 = new Uint32Array(v2);
const v5 = v4.constructor;
try { new v5(v2, 1073741824); } catch (e) {}
gc();
