const o3 = {
    "maxByteLength": 1073741825,
};
const v5 = new ArrayBuffer(4096, o3);
const v7 = new Float32Array(v5);
Reflect.construct(Int8Array, [v7]);
gc();
