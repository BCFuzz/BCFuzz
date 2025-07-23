for (let v1 = 0; v1 < 5; v1++) {
    for (let i4 = 0, i5 = 10;
        i5--, i4 < i5;
        (() => {
            i5--;
            const v11 = createGlobalObject();
            v11.parseInt(v11);
            for (let i14 = -2976, i15 = v1; i14 !== i15; i15--) {
            }
        })()) {
    }
}
gc();
