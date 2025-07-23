const o3 = {
    "maxByteLength": 760,
};
const v5 = new ArrayBuffer(512, o3);
const v7 = new Uint8ClampedArray(v5, 5, 5);
v7.reverse()[1];
gc();
