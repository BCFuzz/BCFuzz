for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    const o13 = {
        "maxByteLength": 255,
    };
    const o15 = {
    };
    const v16 = Uint8Array ^ o15;
    const v17 = new ArrayBuffer(255, o13);
    const v19 = new Int16Array(v17);
    v16 in v19;
}
gc();
