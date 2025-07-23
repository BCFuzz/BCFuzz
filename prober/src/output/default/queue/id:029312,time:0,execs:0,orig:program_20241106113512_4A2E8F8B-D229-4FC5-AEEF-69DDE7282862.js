const v2 = new BigInt64Array();
const v3 = v2 && Uint8ClampedArray;
const v6 = new Uint32Array(1000);
const v8 = new v3(v6.buffer);
v8.set(v6);
gc();
