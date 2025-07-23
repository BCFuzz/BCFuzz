const o2 = {
    "maxByteLength": 426554815,
};
const v4 = new ArrayBuffer(1604, o2);
const v6 = new Int16Array(v4);
const v7 = v6.subarray();
v4.transfer();
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
const o19 = {
    ...v7,
};
gc();
