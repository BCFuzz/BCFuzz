const o3 = {
    "maxByteLength": 3401006522,
};
const v5 = new ArrayBuffer(15, o3);
const v7 = new Uint8ClampedArray(v5);
for (let i = 0; i < 5; i++) {
    v7[1073741825] = 4;
}
gc();
