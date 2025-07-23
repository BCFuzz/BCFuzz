const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
const v3 = new Float64Array(v1);
v1.subarray().set(v3);
gc();
