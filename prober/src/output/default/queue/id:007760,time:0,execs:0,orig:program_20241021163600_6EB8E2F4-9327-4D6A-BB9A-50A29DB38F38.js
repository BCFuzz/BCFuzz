function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const o6 = {
        "maxByteLength": 1953043059,
    };
    const v7 = new ArrayBuffer(F0, o6);
    const v9 = new Uint8Array(v7);
    v9[3] = v9;
}
new F0();
gc();
