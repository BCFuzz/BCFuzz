const o2 = {
    "maxByteLength": 536870889,
};
const v4 = new ArrayBuffer(128, o2);
const v6 = new Int16Array(v4);
for (let i10 = 0, i11 = 10 + 10; i11--, i10 < i11;) {
    createGlobalObject().Atomics.sub(v6);
}
gc();
