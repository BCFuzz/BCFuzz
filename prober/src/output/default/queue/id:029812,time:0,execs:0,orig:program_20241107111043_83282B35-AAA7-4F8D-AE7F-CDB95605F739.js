const v3 = new Int16Array(16);
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
        v14.sub(v3, v11, 129);
    })()) {
}
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
gc();
