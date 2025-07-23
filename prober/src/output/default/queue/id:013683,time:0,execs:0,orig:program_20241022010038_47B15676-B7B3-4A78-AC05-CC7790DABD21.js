for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const t4 = v12.Intl.DateTimeFormat;
                const v15 = new t4();
                return v15;
            },
        };
        const t9 = o16.n;
        t9();
    })()) {
}
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
