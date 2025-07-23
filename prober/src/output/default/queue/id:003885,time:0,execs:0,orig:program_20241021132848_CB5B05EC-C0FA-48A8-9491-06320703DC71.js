const v2 = new SharedArrayBuffer();
const v3 = v2.constructor;
try { new v3(-536870912n); } catch (e) {}
gc();
