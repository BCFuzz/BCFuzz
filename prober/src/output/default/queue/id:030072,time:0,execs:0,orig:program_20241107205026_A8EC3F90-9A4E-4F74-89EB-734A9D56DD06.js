const o4 = {
    "maxByteLength": 5,
};
const v5 = new ArrayBuffer(Int8Array, o4);
const v6 = new BigUint64Array(v5);
v5.transfer();
for (const v8 in v6) {
}
gc();
