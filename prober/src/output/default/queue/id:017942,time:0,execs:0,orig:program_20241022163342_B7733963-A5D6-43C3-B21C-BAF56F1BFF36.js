const v2 = createGlobalObject().Float16Array;
for (let i5 = 0, i6 = 10;
    i5 < i6;
    (() => {
        const v10 = new v2();
        v10.byteLength;
        i6--;
    })()) {
}
gc();
