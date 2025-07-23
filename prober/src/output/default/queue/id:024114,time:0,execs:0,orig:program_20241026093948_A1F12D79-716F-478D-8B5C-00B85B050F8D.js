const v0 = `
    const o3 = {
        "maxByteLength": 268435440,
    };
    const v5 = new SharedArrayBuffer(8, o3);
    new Int8Array(v5, Int8Array, v0);
`;
eval(v0).sort();
gc();
