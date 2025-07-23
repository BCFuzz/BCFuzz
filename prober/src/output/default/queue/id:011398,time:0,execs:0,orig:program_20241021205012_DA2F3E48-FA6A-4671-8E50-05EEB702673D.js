for (let v0 = 0; v0 < 5; v0++) {
    const v1 = v0++;
    const o4 = {
        "maxByteLength": 1780,
    };
    const v6 = new ArrayBuffer(0, o4);
    const v8 = new Uint16Array(v6);
    v8.fill(0).subarray(0, v1);
}
gc();
