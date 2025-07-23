const v2 = new Uint8Array(13);
for (let v3 = 0; v3 < 5; v3++) {
    for (let i6 = 0, i7 = 10;
        i6 < i7;
        (() => {
            const v11 = i7--;
            const v13 = createGlobalObject();
            for (let i16 = -2976, i17 = 10; i16 !== i17; i17--) {
            }
            const v24 = v13.Atomics;
            v24.sub(v2, v11, v3) && v24;
            ("1").normalize();
        })()) {
    }
}
gc();
