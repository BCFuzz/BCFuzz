function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [1073741824,-26526];
    const o5 = {
    };
    const v7 = new Proxy(v4, o5);
    v7.toReversed();
    const o11 = {
        "maxByteLength": 1953043059,
    };
    const v13 = new ArrayBuffer(7, o11);
    const v15 = new Uint8Array(v13);
    v15[4];
}
new F0();
new F0();
gc();
