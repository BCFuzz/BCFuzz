const o2 = {
    "maxByteLength": 426554815,
};
const v5 = -8 + 8;
const v7 = new ArrayBuffer(1604, o2);
const v9 = new Int16Array(v7);
const v10 = v9.subarray(v5, 426554815);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
const o21 = {
    ...v10,
};
gc();
