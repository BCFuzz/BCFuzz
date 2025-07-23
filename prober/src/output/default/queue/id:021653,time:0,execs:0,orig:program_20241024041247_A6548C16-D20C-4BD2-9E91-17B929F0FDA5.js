for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const o17 = {
            n(a10, a11, a12) {
                const v13 = this;
                const v15 = v13.Intl.DateTimeFormat;
                v15.timeZone = -268435456;
                v15(a11, v15);
                return a10;
            },
        };
        const v18 = o17.n;
        try { v18(); } catch (e) {}
    })()) {
}
gc();
