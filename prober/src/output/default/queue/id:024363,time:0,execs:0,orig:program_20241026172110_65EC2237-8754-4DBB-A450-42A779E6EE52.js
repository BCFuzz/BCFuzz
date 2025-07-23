const v2 = new Int16Array();
const v3 = new Float32Array(v2, v2);
v3.subarray();
v2.buffer;
v2["set"](v3);
gc();
