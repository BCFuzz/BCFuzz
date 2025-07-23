const o2 = {
    "maxByteLength": 22282,
};
const v4 = new ArrayBuffer(7, o2);
const v5 = v4.resize(22282);
const v7 = new Uint8Array(v4);
v7.constructor = v5;
v7.subarray();
gc();
