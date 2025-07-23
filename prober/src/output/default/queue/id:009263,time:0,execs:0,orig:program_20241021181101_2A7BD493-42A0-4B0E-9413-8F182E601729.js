function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o4 = {
        "maxByteLength": 255,
    };
    const v6 = new SharedArrayBuffer(0, o4);
    const v8 = new Uint16Array(v6);
    v8.toReversed();
}
new F0();
gc();
