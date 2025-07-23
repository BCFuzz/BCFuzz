const v2 = createGlobalObject().Float16Array;
const v4 = new Uint32Array(Uint32Array);
const v5 = v4.subarray(v2);
v5.constructor = v2;
v5.slice();
gc();
