const o2 = {
    "maxByteLength": 3614,
};
const v4 = new SharedArrayBuffer(3614, o2);
const v6 = new Uint32Array(v4);
createGlobalObject().Atomics.add(v6);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
for (let i23 = -3, i24 = 10; i23 < i24; i24--) {
}
gc();
