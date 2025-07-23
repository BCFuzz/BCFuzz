class C0 {
}
for (let v1 = 0; v1 < 100; v1++) {
    const o4 = {
        "maxByteLength": 5,
    };
    const v6 = new SharedArrayBuffer(5, o4);
    const v8 = new Float32Array(v6);
    v8.reduce(C0);
}
gc();
