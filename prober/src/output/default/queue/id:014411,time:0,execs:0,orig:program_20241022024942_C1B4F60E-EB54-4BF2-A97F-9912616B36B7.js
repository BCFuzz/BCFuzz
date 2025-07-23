for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v13 = v12.Intl;
                const v14 = v13.DateTimeFormat;
                v14(v13, v7, a9, this);
                return v14;
            },
        };
        const t10 = o16.n;
        t10();
    })()) {
}
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
