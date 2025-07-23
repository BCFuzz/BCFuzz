const o2 = {
    "maxByteLength": 4036,
};
const v4 = new SharedArrayBuffer(8, o2);
for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
}
const v16 = new BigUint64Array(v4);
v16.toSorted();
gc();
