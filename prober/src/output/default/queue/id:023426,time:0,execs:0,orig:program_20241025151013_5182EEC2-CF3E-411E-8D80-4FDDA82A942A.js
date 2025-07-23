const v2 = new Uint8Array(210);
for (const v3 of v2) {
    const o6 = {
        "maxByteLength": 2057,
    };
    const v8 = new ArrayBuffer(1000, o6);
    let v10 = new Uint32Array(v8);
    [...v10] = v10;
}
gc();
