function f1(a2, a3) {
    const o5 = {
        "maxByteLength": 2057,
    };
    const v7 = new ArrayBuffer(1000, o5);
    const v9 = new Uint32Array(v7);
    v9.toSorted();
    return v9;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
gc();
