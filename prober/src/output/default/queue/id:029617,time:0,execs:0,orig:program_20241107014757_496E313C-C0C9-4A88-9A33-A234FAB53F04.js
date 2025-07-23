const v2 = new Uint8Array(13);
for (let v3 = 0; v3 < 5; v3++) {
    for (let i6 = 0, i7 = 10;
        i6 < i7;
        (() => {
            const v11 = i7--;
            createGlobalObject().Atomics.sub(v2, v11, v3);
        })()) {
    }
}
gc();
