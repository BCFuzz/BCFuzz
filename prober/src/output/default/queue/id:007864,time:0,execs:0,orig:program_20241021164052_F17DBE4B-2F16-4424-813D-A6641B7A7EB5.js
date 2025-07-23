const v2 = undefined / 0.4064352496610042;
const o6 = {
    "maxByteLength": 65536,
};
const v8 = new ArrayBuffer(5, o6);
const v9 = new Int8Array(v8, Int8Array, v2);
v9[0] = v9;
gc();
