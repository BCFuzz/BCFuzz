const v1 = new SharedArrayBuffer();
const v3 = new Uint16Array();
const v5 = new Float64Array(v1);
v5.set(v3);
gc();
