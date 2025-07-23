for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o20 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                function f15(a16) {
                }
                v14[Symbol.toPrimitive] = f15;
                v14.timeZone = v14;
                v14(a10, v14);
                return Symbol;
            },
        };
        const v21 = o20.n;
        try { v21(); } catch (e) {}
    })()) {
}
gc();
