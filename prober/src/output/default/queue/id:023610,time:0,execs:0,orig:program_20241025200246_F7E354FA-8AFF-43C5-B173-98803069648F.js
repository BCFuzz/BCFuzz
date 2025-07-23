const o2 = {
    "maxByteLength": 10,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Uint8Array(v4);
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
new Int32Array(v6);
for (let i31 = -3, i32 = 10; i31 < i32; i32--) {
}
gc();
