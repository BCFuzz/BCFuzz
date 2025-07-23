const o2 = {
    "maxByteLength": 2580,
};
const v4 = new SharedArrayBuffer(2580, o2);
const v6 = new Uint8Array(v4);
for (let i9 = -3, i10 = 10; i9 < i10; (i10 * i10) in v6, i10--) {
}
gc();
