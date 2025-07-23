const v2 = new ArrayBuffer(9);
const v4 = new DataView(v2);
for (let i8 = 0, i9 = 10 + 10; i9--, i8 < i9;) {
    v4.getInt32(i8);
    for (let v17 = 0; v17 < 250; v17++) {
    }
}
gc();
