const v3 = createGlobalObject().Float16Array;
const v5 = new Uint8Array();
v5.subarray(v3);
const o8 = {
    "maxByteLength": 193709389,
};
const v10 = new ArrayBuffer(95, o8);
const v11 = new v3(v10);
v11.set(v5);
gc();
