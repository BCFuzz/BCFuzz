function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const o6 = {
        "maxByteLength": 1000,
    };
    const v8 = new SharedArrayBuffer(7, o6);
    const v10 = new Int32Array(v8);
    v10.includes(v8);
}
new F0();
gc();
