for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o16 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v13 = v12.Intl;
                const v14 = v13.DateTimeFormat;
                Object.defineProperty(v14, "hourCycle", { writable: true, enumerable: true, value: v13 });
                v14(a10, v14);
                return v14;
            },
        };
        const v17 = o16.n;
        try { v17(); } catch (e) {}
    })()) {
}
gc();
