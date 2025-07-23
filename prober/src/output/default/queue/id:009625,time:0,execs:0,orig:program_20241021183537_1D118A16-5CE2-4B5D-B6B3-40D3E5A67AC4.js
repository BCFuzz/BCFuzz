function f0(a1, a2, a3) {
    const o6 = {
        "maxByteLength": 268435439,
    };
    const v8 = new SharedArrayBuffer(1000, o6);
    const v10 = new Uint16Array(v8);
    v10.byteLength;
}
f0();
f0();
gc();
