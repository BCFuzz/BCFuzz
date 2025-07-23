for (let v0 = 0; v0 < 250; v0++) {
    const o3 = {
        "maxByteLength": 127,
    };
    const v5 = new ArrayBuffer(3, o3);
    BigInt64Array.prototype = BigInt64Array;
    const v7 = new BigInt64Array(v5);
    v7.byteOffset;
}
gc();
