const v1 = new Uint32Array();
const v4 = new Int8Array(4294967296);
const v5 = v1.constructor;
try { new v5(v4); } catch (e) {}
gc();
