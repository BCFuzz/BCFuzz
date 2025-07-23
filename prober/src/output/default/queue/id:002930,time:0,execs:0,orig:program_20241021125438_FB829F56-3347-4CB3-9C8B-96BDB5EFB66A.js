const v3 = new String(128);
const v4 = new Uint32Array(String, 128);
const v5 = v4.includes();
try { v5(v3); } catch (e) {}
gc();
