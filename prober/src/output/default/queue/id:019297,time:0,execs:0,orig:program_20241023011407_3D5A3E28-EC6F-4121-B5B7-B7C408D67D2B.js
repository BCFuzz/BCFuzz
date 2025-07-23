for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o10 = {
            "maxByteLength": 64,
        };
        const v12 = new ArrayBuffer(64, o10);
        const v14 = new Float32Array(v12);
        new Uint8ClampedArray(v14);
    })()) {
}
gc();
