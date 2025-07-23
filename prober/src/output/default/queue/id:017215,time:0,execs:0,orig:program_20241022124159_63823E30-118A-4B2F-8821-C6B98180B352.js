for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                v14.localeMatcher = v14;
                v14(a10, v14);
                return v14;
            },
        };
        const v17 = o16.n;
        try { v17(); } catch (e) {}
    })()) {
}
gc();
