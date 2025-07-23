const v1 = new Uint8Array();
const v3 = new SharedArrayBuffer(Uint8Array, SharedArrayBuffer);
const v5 = new Float64Array(v3);
v5.set(v1);
gc();
