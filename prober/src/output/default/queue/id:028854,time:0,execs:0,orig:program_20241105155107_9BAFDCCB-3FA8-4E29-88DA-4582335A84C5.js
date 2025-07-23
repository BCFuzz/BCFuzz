const v2 = new ArrayBuffer(9);
const v4 = new DataView(v2);
for (let i8 = 0, i9 = 10 + 10; i9--, i8 < i9;) {
    for (let v16 = 0; v16 < 250; v16++) {
    }
    v4.setInt8(i8, i8);
}
gc();
