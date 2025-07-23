const o2 = {
    "maxByteLength": 268435439,
};
const v3 = o2.maxByteLength;
const v5 = new SharedArrayBuffer(1000, o2);
const v7 = new Uint16Array(v5);
v7[344] = v3;
gc();
