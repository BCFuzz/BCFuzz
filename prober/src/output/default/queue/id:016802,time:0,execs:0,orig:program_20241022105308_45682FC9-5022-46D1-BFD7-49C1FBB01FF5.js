for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o19 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v13 = v12.Intl;
                function f14(a15) {
                    return a15();
                }
                v13.toString = f14;
                const v17 = v13.DateTimeFormat;
                v17.numberingSystem = v13;
                v17(a10, v17);
                return a11;
            },
        };
        const v20 = o19.n;
        try { v20(); } catch (e) {}
    })()) {
}
gc();
