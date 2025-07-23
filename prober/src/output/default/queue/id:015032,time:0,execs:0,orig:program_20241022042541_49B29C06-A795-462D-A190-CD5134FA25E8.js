const o2 = {
    "maxByteLength": 1780,
};
const v4 = new ArrayBuffer(0, o2);
const v6 = new Uint16Array(v4);
v6.b = v6;
v6.fill(ArrayBuffer).subarray();
gc();
