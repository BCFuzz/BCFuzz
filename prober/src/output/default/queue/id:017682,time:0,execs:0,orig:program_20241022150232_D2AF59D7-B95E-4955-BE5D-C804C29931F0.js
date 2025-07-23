for (let i3 = -3, i4 = 10; i3 < i4; i4--) {
}
const o13 = {
    "maxByteLength": 1073741824,
};
const v16 = createGlobalObject().Float16Array;
const v18 = new ArrayBuffer(1622, o13);
const v19 = new v16(v18);
new Uint8ClampedArray(v19.subarray());
gc();
