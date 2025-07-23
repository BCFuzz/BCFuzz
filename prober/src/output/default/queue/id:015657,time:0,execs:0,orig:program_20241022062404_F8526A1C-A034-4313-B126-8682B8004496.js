const o3 = {
    "maxByteLength": 5,
};
const v5 = new ArrayBuffer(5, o3);
const v7 = new Int32Array(v5);
v7[0] = 533.8336105272344;
v5.transfer();
const v11 = new Uint8Array(153);
for (let i = 0; i < 5; i++) {
    for (const v12 in v11) {
    }
}
gc();
