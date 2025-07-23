const v1 = new Uint32Array();
const v3 = new Int8Array(v1, Int8Array, v1);
const v5 = v3 > v3 ? v3 : v3;
v3.buffer;
v5["set"](v1);
gc();
