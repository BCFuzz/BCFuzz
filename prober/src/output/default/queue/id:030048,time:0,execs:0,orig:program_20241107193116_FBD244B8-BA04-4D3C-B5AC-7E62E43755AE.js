for (let i4 = 1, i5 = 10; i4 < i5; i5--) {
}
const o13 = {
    "maxByteLength": 268435439,
};
const v15 = new SharedArrayBuffer(3449, o13);
const v16 = new Uint8Array(v15);
createGlobalObject().Atomics.sub(v16);
gc();
