for (let i2 = -3, i3 = 10;
    (() => {
        i3--;
        const o38 = {
            n(a7, a8, a9) {
                const v10 = this;
                const t4 = v10.Intl.Locale;
                const v13 = new t4("aWqBm");
                for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
                    class C25 extends Date {
                    }
                    const v26 = new C25();
                    for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
                    }
                    v26.toLocaleTimeString(i16, v13);
                }
                return "aWqBm";
            },
        };
        const t17 = o38.n;
        t17();
        return i2 < i3;
    })();
    ) {
}
gc();
