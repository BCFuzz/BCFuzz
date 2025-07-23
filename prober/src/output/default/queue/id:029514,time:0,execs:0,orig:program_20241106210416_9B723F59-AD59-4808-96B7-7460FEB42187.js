for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const o13 = {
    "maxByteLength": 268435439,
};
const v15 = new SharedArrayBuffer(3449, o13);
const v16 = new Uint8Array(v15);
const v18 = createGlobalObject();
for (let i21 = 0, i22 = 10; i21 !== i22; i22--) {
}
v18.Atomics.store(v16);
gc();
