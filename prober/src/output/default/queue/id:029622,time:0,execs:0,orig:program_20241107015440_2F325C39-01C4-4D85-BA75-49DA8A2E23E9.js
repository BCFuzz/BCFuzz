const o2 = {
    "maxByteLength": 106,
};
const v4 = new SharedArrayBuffer(7, o2);
const v6 = new Uint16Array(v4);
createGlobalObject().Atomics.and(v6);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
