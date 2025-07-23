for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o17 = {
            n(a9, a10, a11) {
                const v12 = this;
                const t4 = v12.Intl.DateTimeFormat;
                t4().formatRangeToParts(this, this);
                return this;
            },
        };
        const v18 = o17.n;
        try { v18(); } catch (e) {}
    })()) {
}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
