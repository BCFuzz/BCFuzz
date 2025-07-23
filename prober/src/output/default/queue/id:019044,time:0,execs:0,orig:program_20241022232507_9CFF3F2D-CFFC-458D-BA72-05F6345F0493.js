const o2 = {
    "maxByteLength": 119,
};
const v4 = new SharedArrayBuffer(119, o2);
const v6 = new Int16Array(v4);
v6.sort();
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
gc();
