const v1 = new Int16Array();
for (let i4 = -65536, i5 = 255;
    (() => {
        v1[i4] = i5;
        i5--;
        return i4 < i5;
    })();
    ) {
}
gc();
