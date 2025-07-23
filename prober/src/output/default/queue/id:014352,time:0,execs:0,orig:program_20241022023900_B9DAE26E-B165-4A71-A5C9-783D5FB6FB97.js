const v2 = new Uint32Array(1003);
for (const v3 in v2) {
    const o6 = {
        "maxByteLength": 2580,
    };
    const v8 = new SharedArrayBuffer(2580, o6);
    const v10 = new Uint8Array(v8);
    v10.byteLength;
}
gc();
