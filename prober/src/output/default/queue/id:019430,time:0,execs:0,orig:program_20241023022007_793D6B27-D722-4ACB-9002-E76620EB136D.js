class C0 {
}
const v3 = new Uint8ClampedArray(4096);
const v4 = v3[2760];
const o7 = {
    "maxByteLength": 1073741824,
};
const v10 = createGlobalObject().Float16Array;
const v12 = new ArrayBuffer(1622, o7);
const v13 = new v10(v12);
const v14 = v13.subarray(C0, v4);
v14[348] = v14;
gc();
