for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const o18 = {
            n(a10, a11, a12) {
                const v13 = this;
                const v15 = v13.Intl.DateTimeFormat;
                v15.fractionalSecondDigits = i4;
                v15(a11, v15).formatRange(-33859, i4);
                return -33859;
            },
        };
        const v19 = o18.n;
        try { v19(); } catch (e) {}
    })()) {
}
gc();
