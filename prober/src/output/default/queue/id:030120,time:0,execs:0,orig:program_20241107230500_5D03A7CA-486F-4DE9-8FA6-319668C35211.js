const o3 = {
    "maxByteLength": 268435439,
};
const v5 = new SharedArrayBuffer(3449, o3);
const v6 = new Uint32Array(v5);
createGlobalObject().Atomics.and(v6);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
