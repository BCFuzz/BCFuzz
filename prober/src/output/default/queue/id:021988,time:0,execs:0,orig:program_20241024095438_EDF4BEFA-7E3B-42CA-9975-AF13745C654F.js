let v0 = 2285;
const v2 = new Int32Array();
for (let i5 = 10, i6 = 10; i5 < v0;) {
    v0--;
    v2[i5 /= 8];
}
gc();
