function f1() {
    const o5 = {
        "maxByteLength": 12,
    };
    const v7 = new ArrayBuffer(5, o5);
    const v8 = new Int8Array(v7);
    v8.byteOffset;
    return 5;
}
const v11 = new Int32Array(257);
v11.map(f1);
gc();
