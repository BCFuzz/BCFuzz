for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const o18 = {
            n(a10, a11, a12) {
                const v13 = this;
                const t4 = v13.Intl.DateTimeFormat;
                t4().formatToParts(2.2250738585072014e-308);
                return v13;
            },
        };
        const v19 = o18.n;
        v19(i4, v19, v19);
    })()) {
}
gc();
