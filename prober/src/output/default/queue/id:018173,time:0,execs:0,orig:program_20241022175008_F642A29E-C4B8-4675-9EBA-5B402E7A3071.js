for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    const v11 = new Float32Array(i3, i2, i2);
    const o14 = {
        "maxByteLength": 16,
    };
    const v16 = new SharedArrayBuffer(1, o14);
    const v18 = new BigInt64Array(v16);
    const v19 = v18.sort();
    function f20(a21, a22) {
        a22.byteLength;
        return v16;
    }
    v19.constructor = f20;
    const t13 = v19.constructor;
    t13(v11, v19);
}
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
}
gc();
