for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o10 = {
            "maxByteLength": 3546,
        };
        const v12 = new SharedArrayBuffer(3546, o10);
        const v14 = new Float64Array(v12);
        v14[440] = v14;
    })()) {
}
gc();
