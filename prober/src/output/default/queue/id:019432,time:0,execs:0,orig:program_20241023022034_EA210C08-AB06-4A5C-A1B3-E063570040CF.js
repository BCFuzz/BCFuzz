for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const o21 = {
            n(a10, a11, a12) {
                const v13 = this;
                const v15 = v13.Intl.DateTimeFormat;
                function f16(a17) {
                    return -1670917226n;
                }
                v15[Symbol.toPrimitive] = f16;
                v15.timeZone = v15;
                v15(a11, v15);
                return a10;
            },
        };
        const v22 = o21.n;
        try { v22(-1670917226n, i3, o21, o21, -1670917226n); } catch (e) {}
    })()) {
}
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
}
gc();
