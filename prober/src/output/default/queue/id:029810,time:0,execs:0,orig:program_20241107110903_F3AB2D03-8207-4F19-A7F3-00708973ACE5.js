const v2 = new Int16Array(16);
for (let v3 = 0; v3 < 5; v3++) {
    for (let i6 = 0, i7 = 10;
        i6 < i7;
        (() => {
            const v11 = i7--;
            const v14 = createGlobalObject().Atomics;
            let v15 = 0;
            do {
                for (let v16 = 0; v16 < 32; v16++) {
                }
                v15++;
            } while (v15 < 6)
            v14.sub(v2, v11, v3);
        })()) {
    }
}
gc();
