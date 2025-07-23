for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const o7 = {
        };
        const o9 = {
            "maxByteLength": i3,
        };
        const v10 = new ArrayBuffer(o7, o9);
        const v12 = new BigUint64Array(v10);
        v12.byteOffset;
        i3--;
    })()) {
}
gc();
