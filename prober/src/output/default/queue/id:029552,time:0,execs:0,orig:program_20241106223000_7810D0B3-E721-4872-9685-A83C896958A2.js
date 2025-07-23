const o2 = {
    "maxByteLength": 268435441,
};
const v4 = new SharedArrayBuffer(56, o2);
const v6 = new BigInt64Array(v4);
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
    createGlobalObject().Atomics.load(v6);
}
gc();
