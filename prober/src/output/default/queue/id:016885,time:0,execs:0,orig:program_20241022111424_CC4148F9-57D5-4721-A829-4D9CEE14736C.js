for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const o21 = {
            n(a10, a11, a12) {
                const v13 = this;
                const v14 = v13.Intl;
                function f15(a16) {
                    return 114;
                }
                v14[Symbol.toPrimitive] = f15;
                const v19 = v14.DateTimeFormat;
                v19.numberingSystem = v14;
                v19(a11, v19);
                return i4;
            },
        };
        const t15 = o21.n;
        t15(114, i4);
    })()) {
}
gc();
