for (let v0 = 0; v0 < 5; v0++) {
    for (let i3 = 0, i4 = 10;
        i3 < i4;
        (() => {
            i4--;
            const v11 = new BigUint64Array(156);
            createGlobalObject().Atomics.add(v11, v11, 15n);
        })()) {
    }
}
gc();
