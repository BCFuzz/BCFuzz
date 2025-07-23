for (let v0 = 0; v0 < 250; v0++) {
    const o3 = {
        "maxByteLength": 5,
    };
    const v5 = new SharedArrayBuffer(5, o3);
    const v7 = new Float32Array(v5);
    try { v7.keys(); } catch (e) {}
    v7[0];
}
gc();
