for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const o9 = {
            "maxByteLength": 129,
        };
        const v11 = new ArrayBuffer(129, o9);
        const v13 = new Int16Array(v11);
        v13[15] = v13;
        i3--;
    })()) {
}
gc();
