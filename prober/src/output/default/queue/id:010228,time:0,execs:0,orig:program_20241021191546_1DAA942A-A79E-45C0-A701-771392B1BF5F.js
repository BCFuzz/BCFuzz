const v3 = new Int32Array(Uint8Array);
const v4 = new Int32Array(v3, Uint8Array, v3);
v4.indexOf.apply(v3, Float32Array);
gc();
