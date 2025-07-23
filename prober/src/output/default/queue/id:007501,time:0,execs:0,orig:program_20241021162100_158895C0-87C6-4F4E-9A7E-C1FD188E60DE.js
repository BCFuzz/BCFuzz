for (let i2 = 0, i3 = 10;
    i2 !== i3;
    (() => {
        const o9 = {
            "maxByteLength": 12,
        };
        const v11 = new SharedArrayBuffer(12, o9);
        const v13 = new Int32Array(v11);
        try { v13.findIndex(SharedArrayBuffer); } catch (e) {}
        i3--;
    })()) {
}
gc();
