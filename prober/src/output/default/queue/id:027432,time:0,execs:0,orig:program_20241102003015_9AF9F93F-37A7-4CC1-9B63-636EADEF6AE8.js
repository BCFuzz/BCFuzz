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
                return v12;
            },
        };
        const v18 = o17.n;
        const v19 = v18.bind(i3, i2, i2);
        try { v18(v19); } catch (e) {}
    })()) {
}
gc();
