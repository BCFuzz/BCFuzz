for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o22 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                function f15(a16, a17) {
                    return a10();
                }
                Object.defineProperty(v14, Symbol.toPrimitive, { enumerable: true, value: f15 });
                v14.timeZone = v14;
                return v14(a10, v14);
            },
        };
        const v23 = o22.n;
        try { v23(); } catch (e) {}
    })()) {
}
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
gc();
