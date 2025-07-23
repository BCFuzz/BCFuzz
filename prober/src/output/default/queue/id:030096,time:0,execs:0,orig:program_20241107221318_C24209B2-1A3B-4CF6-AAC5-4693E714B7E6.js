const v2 = new Int8Array(3043);
for (let v3 = 0; v3 < 5; v3++) {
    for (let i6 = 0, i7 = 10;
        i6 < i7;
        (() => {
            const v11 = i7--;
            const v14 = createGlobalObject().Atomics;
            try { v14.isLockFree(v3); } catch (e) {}
            const v16 = v14.and(v2, v3, v11);
            v16 * v16;
            for (let i = 0; i < 5; i++) {
                for (let v18 = 0; v18 < 25; v18++) {
                }
            }
        })()) {
    }
}
gc();
