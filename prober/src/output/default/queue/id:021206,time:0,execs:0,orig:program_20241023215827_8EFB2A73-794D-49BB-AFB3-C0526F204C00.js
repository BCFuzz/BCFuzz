function f1() {
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
    }
    return ArrayBuffer;
}
const o13 = {
    "maxByteLength": 4096,
};
const v15 = new ArrayBuffer(255, o13);
const v17 = new Uint16Array(v15);
v17.sort(f1);
gc();
