const o2 = {
    "maxByteLength": 65537,
};
const v4 = new ArrayBuffer(1175, o2);
const v6 = new Uint32Array(v4);
createGlobalObject().Atomics.store(v6);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
