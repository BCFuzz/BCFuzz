const o3 = {
    "maxByteLength": 3614,
};
const v5 = new SharedArrayBuffer(3614, o3);
const v6 = new Int8Array(v5);
createGlobalObject().Atomics.xor(v6);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
