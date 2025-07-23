const v2 = new Uint32Array();
const v3 = v2.constructor;
try { new v3(-4294967297n); } catch (e) {}
gc();
