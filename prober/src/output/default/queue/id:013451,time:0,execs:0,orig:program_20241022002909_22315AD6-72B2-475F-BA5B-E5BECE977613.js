for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const o19 = {
            n(a10, a11, a12) {
                const v13 = this;
                const t4 = v13.Intl.Segmenter;
                const v16 = new t4();
                const v17 = v16.segment();
                v17.containing(true);
                return v17;
            },
        };
        const t11 = o19.n;
        t11();
    })()) {
}
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
gc();
