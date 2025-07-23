function f0(a1, a2) {
    for (let i5 = 0, i6 = 10; i5 !== i6; i6--) {
    }
    const v15 = createGlobalObject().Float16Array;
    const o18 = {
        "maxByteLength": 268435439,
    };
    const v20 = new SharedArrayBuffer(1000, o18);
    const v21 = new v15(v20);
    v21.byteLength;
    return a2;
}
f0();
f0();
gc();
