function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o7 = {
        "maxByteLength": 1953043059,
    };
    const v9 = new ArrayBuffer(7, o7);
    const v11 = new Uint8Array(v9, Uint8Array, 7);
    "fromEntries" >>> v11;
}
new F1();
gc();
