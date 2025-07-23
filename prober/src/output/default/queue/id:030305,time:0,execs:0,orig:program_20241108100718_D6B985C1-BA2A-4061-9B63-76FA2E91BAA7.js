const v2 = new Uint16Array(3043);
for (let v3 = 0; v3 < 5; v3++) {
    for (let i6 = 0, i7 = 10;
        i6 < i7;
        (() => {
            i7--;
            createGlobalObject().Atomics.and(v2, v3, 3043);
            for (let i = 0; i < 5; i++) {
                for (let v16 = 0; v16 < 32; v16++) {
                }
            }
        })()) {
    }
}
gc();
