const o3 = {
    "maxByteLength": 3614,
};
const v5 = new SharedArrayBuffer(3614, o3);
const v7 = new Int32Array(v5);
createGlobalObject().Atomics.wait(v7, v7, o3, "64");
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
