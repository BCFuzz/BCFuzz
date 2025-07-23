const v2 = new Uint8Array();
const v4 = new Uint16Array(v2.buffer);
v4.set(v2);
gc();
