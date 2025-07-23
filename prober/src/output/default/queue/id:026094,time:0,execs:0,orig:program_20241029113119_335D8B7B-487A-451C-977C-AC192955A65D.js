for (let i2 = -3, i3 = 10;
    (() => {
        const v4 = i2.toLocaleString(i2);
        const o14 = {
            n(a6, a7, a8) {
                const v9 = this;
                const v11 = v9.Intl.NumberFormat;
                return v11(i2, v11, i2, a6).constructor(v9, this);
            },
        };
        const v15 = o14.n;
        v15(i3, v15, v15, i3, i2).formatToParts(v4);
        return i2 < i3;
    })();
    i3--) {
}
gc();
