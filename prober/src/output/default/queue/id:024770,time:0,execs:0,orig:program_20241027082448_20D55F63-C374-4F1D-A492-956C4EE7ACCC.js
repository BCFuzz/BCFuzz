const o3 = {
    "maxByteLength": 16,
};
const v5 = new ArrayBuffer(16, o3);
const v7 = new Uint32Array(v5);
v7[268435441n] = "toPrimitive";
gc();
