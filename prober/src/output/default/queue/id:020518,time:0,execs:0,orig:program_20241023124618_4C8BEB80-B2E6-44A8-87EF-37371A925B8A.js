const o3 = {
    "maxByteLength": 1073741824,
};
const v5 = new ArrayBuffer(2177, o3);
const v7 = new Uint16Array(v5);
const v10 = new Int32Array(10);
for (const v11 in v10) {
    256 in v7;
}
gc();
