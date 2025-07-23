function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            const o16 = {
                "maxByteLength": 1737,
            };
            const v18 = new ArrayBuffer(512, o16);
            const v20 = new BigInt64Array(v18);
            v20.slice();
        })()) {
    }
}
new F0(F0, F0, F0, F0);
gc();
