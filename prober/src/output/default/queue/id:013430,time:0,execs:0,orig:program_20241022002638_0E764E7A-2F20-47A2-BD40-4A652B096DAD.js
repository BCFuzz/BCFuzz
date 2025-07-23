for (let i2 = 0, i3 = 10;
    i3--, i2 < i3;
    (() => {
        for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
            const v20 = createGlobalObject().Atomics;
            try { v20.load(createGlobalObject, v20); } catch (e) {}
            for (let v22 = 0; v22 < 50; v22++) {
            }
        }
    })()) {
}
gc();
