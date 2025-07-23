const v2 = createGlobalObject().Atomics;
for (let i5 = 0, i6 = 10;
    i5 < i6;
    (() => {
        i6--;
        const o13 = {
            "maxByteLength": 3614,
        };
        const v15 = new SharedArrayBuffer(3614, o13);
        const v17 = new Int32Array(v15);
        v2.waitAsync(v17);
    })()) {
}
gc();
