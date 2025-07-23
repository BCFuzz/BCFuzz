const o2 = {
    "maxByteLength": 255,
};
const v4 = new ArrayBuffer(255, o2);
const v6 = new Int32Array(v4);
v4["transfer"]();
v6.byteOffset;
gc();
