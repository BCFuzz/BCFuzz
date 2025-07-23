const o3 = {
    "maxByteLength": 5,
};
const v5 = new ArrayBuffer(5, o3);
const v7 = new Int32Array(v5);
const v8 = v7.subarray();
const v9 = new Uint16Array();
const t7 = v9.constructor;
new t7(v8);
gc();
