for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    i12 < i13;
    (() => {
        const v19 = createGlobalObject().Float16Array;
        const o22 = {
            "maxByteLength": 6,
        };
        const v24 = new SharedArrayBuffer(6, o22);
        const v26 = new BigUint64Array(v24);
        const v27 = v26.sort(createGlobalObject);
        try { v19.from(v27); } catch (e) {}
    })()) {
    i13--;
}
gc();
