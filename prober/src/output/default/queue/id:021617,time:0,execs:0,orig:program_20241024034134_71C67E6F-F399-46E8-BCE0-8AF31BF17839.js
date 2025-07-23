for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                v14.fractionalSecondDigits = i3;
                v14(a10, v14);
                return a9;
            },
        };
        const v17 = o16.n;
        try { v17(o16, v17, v17, v7, o16); } catch (e) {}
    })()) {
}
gc();
