const v1 = new Float32Array();
const v2 = v1.buffer;
const v4 = new Uint8Array(v1, v1);
v4.subarray(v2, Float32Array);
v1.set(v4);
gc();
