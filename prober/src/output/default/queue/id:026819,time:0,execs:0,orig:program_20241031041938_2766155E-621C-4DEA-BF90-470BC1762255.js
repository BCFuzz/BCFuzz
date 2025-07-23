for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o12 = {
    "maxByteLength": 64,
};
const v14 = new ArrayBuffer(64, o12);
const v16 = new Float32Array(v14);
v14.transfer();
v16.byteOffset;
gc();
