const v2 = new Float32Array(Uint8ClampedArray);
const v3 = v2[0];
const v4 = ~v3;
const v6 = createGlobalObject();
const v7 = v6.Float16Array;
const v8 = new v7(v6, Uint8ClampedArray, v7, v3, v2);
v8.copyWithin(v2, v8, v3).copyWithin(Uint8ClampedArray, v4);
gc();
