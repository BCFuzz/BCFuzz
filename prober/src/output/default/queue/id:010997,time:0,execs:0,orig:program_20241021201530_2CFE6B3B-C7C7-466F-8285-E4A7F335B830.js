function f0(a1, a2, a3, a4) {
    return f0;
}
for (let v5 = 0; v5 < 5; v5++) {
}
const v8 = new Uint8ClampedArray(9);
for (const v9 in v8) {
    const v11 = +f0;
    const o14 = {
        "maxByteLength": 12,
    };
    const v16 = new ArrayBuffer(5, o14);
    const v17 = new Int8Array(v16);
    v17[1073741825] = v11;
}
gc();
