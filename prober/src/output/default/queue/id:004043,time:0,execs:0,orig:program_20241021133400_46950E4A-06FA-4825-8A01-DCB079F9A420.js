const v1 = 255 - 255;
const v3 = new Uint8Array();
const v4 = v3.reverse();
try { v4.setFromBase64(v1); } catch (e) {}
gc();
