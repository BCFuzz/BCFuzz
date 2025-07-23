function f0(a1, a2) {
    const o5 = {
        "maxByteLength": 1928,
    };
    const v7 = new SharedArrayBuffer(1928, o5);
    const v9 = new Uint8ClampedArray(v7);
    return v9;
}
f0[Symbol.species] = f0;
for (let v12 = 0; v12 < 25; v12++) {
    for (let i15 = -3, i16 = 10;
        i15 < i16;
        (() => {
            const v21 = new Int32Array(v12);
            v21.constructor = f0;
            function f22(a23, a24, a25, a26) {
            }
            v21.map(f22);
            i16--;
        })()) {
    }
}
gc();
