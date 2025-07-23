for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v13 = v12.Intl;
                const v14 = v13.DateTimeFormat;
                v14.timeZoneName = a10;
                v14(a10, v14);
                return v13;
            },
        };
        const v17 = o16.n;
        try { v17(i2, v7); } catch (e) {}
    })()) {
}
for (let i23 = 0, i24 = 10; i23 != i24; i24--) {
}
gc();
