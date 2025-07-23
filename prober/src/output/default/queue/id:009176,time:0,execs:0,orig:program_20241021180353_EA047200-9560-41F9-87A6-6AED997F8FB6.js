const o3 = {
    "maxByteLength": 255,
};
const v5 = new SharedArrayBuffer(0, o3);
const v7 = new Uint16Array(v5);
v7.slice(-65537);
gc();
