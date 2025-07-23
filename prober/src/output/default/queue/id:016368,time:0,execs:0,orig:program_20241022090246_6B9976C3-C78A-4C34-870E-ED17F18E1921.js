const o3 = {
    "maxByteLength": 536870887,
};
const v5 = new SharedArrayBuffer(129, o3);
const v6 = new Uint8ClampedArray(v5);
Uint16Array.from(v6);
gc();
