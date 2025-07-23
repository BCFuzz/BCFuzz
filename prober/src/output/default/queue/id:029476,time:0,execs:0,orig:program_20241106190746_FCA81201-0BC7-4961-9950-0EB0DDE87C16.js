const o2 = {
    "maxByteLength": 5,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Int8Array(v4);
v4.transfer();
for (const v8 in v6) {
}
gc();
