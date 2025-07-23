const v2 = new Uint32Array("number", "number", "number");
const v3 = v2.constructor;
const v4 = new v3(v2);
const v6 = new Uint16Array(v4, v3);
try { v6.sort("number"); } catch (e) {}
gc();
