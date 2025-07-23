for (let i2 = -3, i3 = 10;
    (() => {
        i3--;
        const o15 = {
            n(a7, a8, a9) {
                const v10 = this;
                const v12 = v10.Intl.Locale;
                v12.calendar = "aWqBm";
                const v13 = new v12("aWqBm", v12);
                v13.calendar;
                return v13;
            },
        };
        const t11 = o15.n;
        t11();
        return i2 < i3;
    })();
    ) {
}
gc();
