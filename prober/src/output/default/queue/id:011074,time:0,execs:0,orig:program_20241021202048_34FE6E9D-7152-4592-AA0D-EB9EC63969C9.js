for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    const o13 = {
        "maxByteLength": 2580,
    };
    const v15 = new SharedArrayBuffer(2580, o13);
    const v17 = new Uint8Array(v15);
    v17.byteOffset &&= -4096;
}
new Int8Array(Int8Array);
for (let v20 = 0; v20 < 250; v20++) {
}
gc();
