class C1 extends Int8Array {
}
const o4 = {
    "maxByteLength": 9,
};
const v6 = new SharedArrayBuffer(9, o4);
new C1(v6);
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
gc();
