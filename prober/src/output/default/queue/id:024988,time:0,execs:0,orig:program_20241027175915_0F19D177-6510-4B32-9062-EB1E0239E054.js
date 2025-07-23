class C0 {
}
const v3 = new Uint8ClampedArray(4096);
let v4 = v3[2760];
const v5 = v4 + v4;
v4--;
const o9 = {
    "maxByteLength": 1073741824,
};
const v12 = createGlobalObject().Float16Array;
const v14 = new ArrayBuffer(1622, o9);
const v15 = new v12(v14);
const t12 = v15.subarray(C0, v4);
t12[348] = v5;
gc();
