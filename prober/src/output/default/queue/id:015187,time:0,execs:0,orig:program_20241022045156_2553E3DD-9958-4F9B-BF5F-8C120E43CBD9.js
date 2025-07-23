const v0 = [-1.2263552534524304e+308,782.3655088198889];
for (let i = 0; i < 5; i++) {
    for (let i4 = 0, i5 = 10; i5--, i4 < i5;) {
        const v14 = createGlobalObject().Atomics;
        try { v14.compareExchange(createGlobalObject, v0, v0, 1024); } catch (e) {}
        for (let v16 = 0; v16 < 100; v16++) {
        }
    }
}
gc();
