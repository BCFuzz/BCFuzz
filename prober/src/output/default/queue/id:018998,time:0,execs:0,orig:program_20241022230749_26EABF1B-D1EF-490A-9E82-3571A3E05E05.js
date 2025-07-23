const v1 = new Uint16Array();
const v3 = new Int8Array(v1, v1, v1);
const v5 = v3 > v3 ? v3 : v3;
v5.buffer;
v5["set"](v1);
gc();
