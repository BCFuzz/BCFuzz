for (let v0 = 0; v0 < 10; v0++) {
    const o3 = {
        "maxByteLength": 10000,
    };
    const v5 = new SharedArrayBuffer(3906, o3);
    const v7 = new Uint32Array(v5);
    v7[793] = v7;
}
gc();
