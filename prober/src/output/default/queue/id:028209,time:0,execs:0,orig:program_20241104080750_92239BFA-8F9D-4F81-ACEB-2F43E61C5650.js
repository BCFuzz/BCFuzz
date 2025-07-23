for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const v10 = new BigUint64Array(156);
        v10.subarray(v7, i2);
        createGlobalObject().Atomics.add(v10, v10, 15n);
    })()) {
}
gc();
