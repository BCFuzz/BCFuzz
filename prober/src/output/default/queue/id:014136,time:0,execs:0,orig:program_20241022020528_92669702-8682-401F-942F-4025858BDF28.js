for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const t4 = v12.Intl.DateTimeFormat;
                return t4();
            },
        };
        const t8 = o16.n;
        t8(v7, i3).resolvedOptions();
    })()) {
}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
