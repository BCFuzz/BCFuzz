for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                v14.formatMatcher = i2;
                v14(a10, v14);
                return i3;
            },
        };
        const v17 = o16.n;
        try { v17(); } catch (e) {}
    })()) {
}
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
