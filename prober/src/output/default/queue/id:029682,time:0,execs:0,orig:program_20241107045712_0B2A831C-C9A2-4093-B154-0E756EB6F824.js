for (let i3 = -65536, i4 = 10; i3 < i4; i4--) {
}
const o13 = {
    "maxByteLength": 65537,
};
const v15 = new ArrayBuffer(1175, o13);
const v16 = new Int8Array(v15);
createGlobalObject().Atomics.compareExchange(v16);
gc();
