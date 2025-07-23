const v2 = new Float32Array(1024);
const v3 = new Float32Array();
const v5 = Uint8ClampedArray.from(v3);
try { v5.set(v2); } catch (e) {}
gc();
