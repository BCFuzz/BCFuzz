const o2 = {
    "maxByteLength": 3031,
};
const v4 = new SharedArrayBuffer(3031, o2);
const v6 = new Uint32Array(v4);
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
    createGlobalObject().Atomics.exchange(v6);
}
gc();
