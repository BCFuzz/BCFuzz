const v1 = new Uint32Array();
const v2 = v1.buffer;
const v5 = new Uint16Array(v2.transfer(), v2);
try { v1.set(v5); } catch (e) {}
gc();
