const v1 = new Int8Array();
const v2 = v1.constructor;
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const o15 = {
    "maxByteLength": 65537,
};
const v17 = new ArrayBuffer(1175, o15);
const v18 = new v2(v17);
createGlobalObject().Atomics.xor(v18);
gc();
