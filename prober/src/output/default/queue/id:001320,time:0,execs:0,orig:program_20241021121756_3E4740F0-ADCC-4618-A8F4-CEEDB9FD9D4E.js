const v2 = new Uint16Array();
const v3 = v2.constructor;
try { new v3(-1073741824); } catch (e) {}
gc();
