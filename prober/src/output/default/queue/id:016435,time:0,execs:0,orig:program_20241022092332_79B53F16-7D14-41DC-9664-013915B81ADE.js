let v0 = 16;
const v1 = v0++;
const o4 = {
    "maxByteLength": 1780,
};
const v6 = new ArrayBuffer(0, o4);
const v8 = new Uint16Array(v6);
const v10 = v8.fill(v6, v0, 0).subarray(0, v1);
const v12 = new Int8Array(0, v0, v10);
v10[548211134] = v12;
gc();
