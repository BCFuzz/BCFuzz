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
const v22 = v1.buffer;
const v24 = createGlobalObject();
const v25 = v24.Float16Array;
const v26 = new v25(v25, v22, v1, v24);
v26.subarray().set(v1);
gc();
