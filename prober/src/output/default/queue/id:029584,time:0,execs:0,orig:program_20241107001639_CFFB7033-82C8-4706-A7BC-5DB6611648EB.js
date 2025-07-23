const v2 = new SharedArrayBuffer(56);
const v4 = new BigInt64Array(v2);
for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
    createGlobalObject().Atomics.notify(v4);
}
gc();
