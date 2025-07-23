for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o19 = {
            n(a9, a10, a11) {
                const v12 = this;
                const v14 = v12.Intl.DateTimeFormat;
                function f15() {
                    a11.toString = f15;
                    return a10;
                }
                function f16(a17) {
                    return i2;
                }
                Object.defineProperty(v14, "minute", { configurable: true, get: f15, set: f16 });
                v14(a10, v14);
                return a10;
            },
        };
        const v20 = o19.n;
        try { v20(); } catch (e) {}
    })()) {
}
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
gc();
