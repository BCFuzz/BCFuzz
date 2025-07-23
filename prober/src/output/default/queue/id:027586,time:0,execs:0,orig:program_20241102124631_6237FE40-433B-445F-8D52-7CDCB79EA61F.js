for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o12 = {
    "maxByteLength": 5,
};
const v14 = new ArrayBuffer(5, o12);
const v16 = new Uint8ClampedArray(v14);
v14.transfer();
for (const v18 in v16) {
}
gc();
