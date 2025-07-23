for (let i2 = -3, i3 = 10; i3--, i2 < i3;) {
}
for (let v10 = 0; v10 < 250; v10++) {
    const v11 = v10++;
    const v13 = new Int32Array(v11, v11);
    for (let i16 = 0, i17 = 10; i16 < i17; i16++, i17--) {
        i16--;
        i16 /= v10;
        v13[i16];
    }
}
gc();
