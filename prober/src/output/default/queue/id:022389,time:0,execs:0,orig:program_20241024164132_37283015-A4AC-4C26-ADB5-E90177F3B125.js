for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o17 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                v14.fractionalSecondDigits = i3;
                v14(a10, v14).resolvedOptions(v7, a9);
                return i2;
            },
        };
        const v18 = o17.n;
        try { v18(v18, o17); } catch (e) {}
    })()) {
}
gc();
