class C0 {
}
const v3 = new Uint8ClampedArray(4096);
let v4 = v3[2760];
v4--;
const o8 = {
    "maxByteLength": 1073741824,
};
const v11 = createGlobalObject().Float16Array;
const v13 = new ArrayBuffer(1622, o8);
const v14 = new v11(v13);
v14.subarray(C0, v4).toLocaleString();
gc();
