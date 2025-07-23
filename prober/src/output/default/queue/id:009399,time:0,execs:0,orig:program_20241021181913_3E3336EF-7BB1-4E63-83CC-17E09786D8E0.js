const v1 = new Uint16Array();
let v2;
try { v2 = v1.findIndex(); } catch (e) {}
const v4 = new Uint8ClampedArray(v1, v2, v2);
v4.slice(v2, v2);
gc();
