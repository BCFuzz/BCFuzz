const o2 = {
    "maxByteLength": 3614,
};
const v4 = new SharedArrayBuffer(3614, o2);
const v6 = new Uint32Array(v4);
createGlobalObject().Atomics.or(v6);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
