for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.Segmenter;
                v14.localeMatcher = this;
                v14.supportedLocalesOf(i3, v14);
                return i3;
            },
        };
        const v17 = o16.n;
        try { v17(v7, i3, v17, v7); } catch (e) {}
    })()) {
}
for (let i24 = 0, i25 = 10 + 10; i25--, i25;) {
}
gc();
