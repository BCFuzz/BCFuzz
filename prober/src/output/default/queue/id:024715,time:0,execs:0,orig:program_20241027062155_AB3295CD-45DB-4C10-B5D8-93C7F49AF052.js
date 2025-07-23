const v1 = new Float32Array();
const v3 = new Uint16Array(v1);
const v4 = new Float32Array(v1, v3);
const v6 = v1 > v4 ? v4 : v4;
v6.buffer;
v6["set"](v3);
gc();
