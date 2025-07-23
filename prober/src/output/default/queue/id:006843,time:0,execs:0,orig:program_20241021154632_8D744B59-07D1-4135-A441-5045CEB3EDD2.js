function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 100; v2++) {
        const o5 = {
            "maxByteLength": 255,
        };
        const v7 = new SharedArrayBuffer(0, o5);
        new Uint16Array(v7);
    }
}
new F0();
new F0();
gc();
