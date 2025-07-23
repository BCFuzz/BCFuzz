const v2 = new Int32Array(5, 5, 5);
for (let i5 = 5, i6 = 10; i5 < i6;) {
    i5--;
    i6--;
    i5 /= 8;
    v2[i5];
}
gc();
