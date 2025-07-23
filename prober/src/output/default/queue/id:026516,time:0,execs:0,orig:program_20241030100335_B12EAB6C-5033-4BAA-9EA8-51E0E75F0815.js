const o3 = {
    "maxByteLength": 255,
};
const v5 = new ArrayBuffer(255, o3);
const v6 = new Uint16Array(v5);
v5["transfer"]();
v6.byteOffset;
gc();
