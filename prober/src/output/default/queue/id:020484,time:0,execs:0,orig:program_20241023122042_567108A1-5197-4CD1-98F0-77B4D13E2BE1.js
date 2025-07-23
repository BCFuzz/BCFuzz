for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o19 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                function f15(a16, a17) {
                    a17.e = a16;
                    return a17;
                }
                v14.toString = f15;
                v14.hour = v14;
                v14(a10, v14);
                return i2;
            },
        };
        const v20 = o19.n;
        try { v20(); } catch (e) {}
    })()) {
}
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
gc();
