const v2 = new Uint8Array();
const v4 = new Uint16Array();
try { v4.set(v2, 9007199254740991); } catch (e) {}
gc();
