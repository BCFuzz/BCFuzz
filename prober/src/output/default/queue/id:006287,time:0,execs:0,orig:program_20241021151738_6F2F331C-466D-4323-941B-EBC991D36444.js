const o3 = {
    "maxByteLength": 536870889,
};
const v5 = new SharedArrayBuffer(10, o3);
const v7 = new Uint32Array(v5);
v7.buffer -= -2.0;
gc();
