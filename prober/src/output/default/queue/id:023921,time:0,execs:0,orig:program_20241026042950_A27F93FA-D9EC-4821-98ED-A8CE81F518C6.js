for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        const v9 = new SharedArrayBuffer(4294967296);
        v9.maxByteLength;
        i4--;
    })()) {
}
gc();
