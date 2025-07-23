for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    const o12 = {
        "maxByteLength": 2580,
    };
    const v14 = new SharedArrayBuffer(2580, o12);
    const v16 = new Uint8Array(v14);
    v16.includes(o12, 2580);
}
gc();
