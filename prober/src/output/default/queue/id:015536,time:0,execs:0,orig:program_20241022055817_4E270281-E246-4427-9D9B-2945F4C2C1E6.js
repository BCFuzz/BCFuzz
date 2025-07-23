for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    const o12 = {
        "maxByteLength": 760,
    };
    const v14 = new ArrayBuffer(512, o12);
    const v16 = new Uint8ClampedArray(v14);
    v16.byteLength;
}
gc();
