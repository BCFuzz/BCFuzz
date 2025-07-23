for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o22 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v13 = v12.Intl;
                const v14 = v13.DateTimeFormat;
                function f15(a16, a17) {
                    return v13(v7, a17, a17, a11);
                }
                Object.defineProperty(v14, Symbol.toPrimitive, { writable: true, enumerable: true, value: f15 });
                v14.calendar = v14;
                v14(a10, v14);
                return i3;
            },
        };
        const v23 = o22.n;
        try { v23(); } catch (e) {}
    })()) {
}
gc();
