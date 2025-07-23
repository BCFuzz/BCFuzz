const o2 = {
    "maxByteLength": 3401006522,
};
const v3 = new ArrayBuffer(3401006522, o2);
const v5 = new Uint8ClampedArray(v3);
const v8 = new Uint16Array(3578);
for (const v9 of v8) {
}
v5[1073741825] = 3578;
gc();
