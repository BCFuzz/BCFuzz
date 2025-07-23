for (let v0 = 0; v0 < 10; v0++) {
    const o3 = {
        "maxByteLength": 11,
    };
    const v5 = new ArrayBuffer(11, o3);
    const v7 = new Uint16Array(v5);
    v7[1] = v7;
}
gc();
