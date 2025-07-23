for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let i = 0; i < 5; i++) {
    const o12 = {
        "maxByteLength": 2147483649,
    };
    const v14 = new SharedArrayBuffer(12, o12);
    const v16 = new Uint8ClampedArray(v14);
    v16.byteOffset += 1.2055895643347592e+308;
}
gc();
