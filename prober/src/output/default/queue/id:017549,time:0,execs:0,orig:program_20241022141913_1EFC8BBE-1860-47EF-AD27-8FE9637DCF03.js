for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                new v14(i2, v14);
                return v12;
            },
        };
        const t9 = o16.n;
        t9();
    })()) {
}
gc();
