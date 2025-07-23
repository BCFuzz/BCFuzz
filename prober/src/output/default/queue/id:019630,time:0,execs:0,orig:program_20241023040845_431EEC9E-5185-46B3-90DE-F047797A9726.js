const v1 = delete undefined?.b;
const v3 = new Uint16Array();
v3.constructor = v1;
try { v3.subarray(); } catch (e) {}
gc();
