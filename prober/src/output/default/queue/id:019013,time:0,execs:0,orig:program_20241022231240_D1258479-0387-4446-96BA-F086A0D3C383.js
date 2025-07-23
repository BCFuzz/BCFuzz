function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10;
        i5--, i4 < i5;
        (() => {
            const o12 = {
                "maxByteLength": 129,
            };
            const v14 = new ArrayBuffer(129, o12);
            const v16 = new Int16Array(v14);
            v16.byteOffset;
        })()) {
    }
}
new F0();
gc();
