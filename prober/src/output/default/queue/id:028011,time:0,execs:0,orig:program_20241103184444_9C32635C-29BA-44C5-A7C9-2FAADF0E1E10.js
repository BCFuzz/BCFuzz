for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o24 = {
            n(a9, a10, a11) {
                function f13(a14) {
                    return i3;
                }
                Uint16Array.toString = f13;
                const o18 = {
                    "maxByteLength": 23,
                };
                const v20 = new ArrayBuffer(23, o18);
                const v22 = new BigInt64Array(v20, undefined, Uint16Array);
                v22[1];
                return f13;
            },
        };
        const v25 = o24.n;
        try { v25(); } catch (e) {}
    })()) {
}
gc();
