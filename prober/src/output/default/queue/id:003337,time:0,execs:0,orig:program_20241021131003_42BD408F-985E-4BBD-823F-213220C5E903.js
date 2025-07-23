const o2 = {
    "maxByteLength": 64,
};
const v4 = new ArrayBuffer(64, o2);
const v6 = new Float32Array(v4);
v6[4] = ArrayBuffer;
for (let v7 = 0; v7 < 250; v7++) {
}
gc();
