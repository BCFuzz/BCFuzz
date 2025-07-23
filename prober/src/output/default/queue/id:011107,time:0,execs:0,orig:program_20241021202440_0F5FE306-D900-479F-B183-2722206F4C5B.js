for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 10; v10++) {
    const o13 = {
        "maxByteLength": 10000,
    };
    const v15 = new SharedArrayBuffer(3906, o13);
    const v17 = new Uint32Array(v15);
    v17[793] = v17;
}
gc();
