for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o17 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.Segmenter;
                const v15 = new v14(a9, v14, v14, v14, a10);
                return v15.segment();
            },
        };
        const t9 = o17.n;
        t9();
    })()) {
}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
