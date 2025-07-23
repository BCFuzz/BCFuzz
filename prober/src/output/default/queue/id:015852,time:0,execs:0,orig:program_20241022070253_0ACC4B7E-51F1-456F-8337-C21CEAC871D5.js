function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 5; v2++) {
    }
    const o5 = {
        "maxByteLength": 136,
    };
    const v7 = new SharedArrayBuffer(2, o5);
    const v9 = new Float64Array(v7);
    v9.byteLength += 1.7976931348623157e+308;
}
new F0();
new F0();
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
gc();
