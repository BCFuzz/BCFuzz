const v1 = new Uint8ClampedArray();
for (let i4 = 0, i5 = 10;
    (() => {
        const v6 = i4 < i5;
        for (let i9 = 0, i10 = 10; i9 != i10; i10--) {
        }
        return v6;
    })();
    i5--) {
}
const o24 = {
    "maxByteLength": 1073741824,
};
const v27 = createGlobalObject().Float16Array;
const v29 = new ArrayBuffer(1622, o24);
const v30 = new v27(v29);
v30.subarray().set(v1);
gc();
