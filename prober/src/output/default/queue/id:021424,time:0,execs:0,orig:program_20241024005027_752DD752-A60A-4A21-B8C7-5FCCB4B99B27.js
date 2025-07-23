for (let i2 = 0, i3 = 10;
    i3--, i2 < i3;
    (() => {
        const o17 = {
            n(a9, a10, a11) {
                const v12 = a9.name;
                const v13 = this;
                const v15 = v13.Intl.DateTimeFormat;
                v15.month = v12;
                v15(a10, v15);
                return i2;
            },
        };
        const v18 = o17.n;
        try { v18(v18); } catch (e) {}
    })()) {
}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
