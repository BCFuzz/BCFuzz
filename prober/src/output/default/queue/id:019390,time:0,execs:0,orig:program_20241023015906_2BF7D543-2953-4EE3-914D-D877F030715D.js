for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o17 = {
            n(a9, a10, a11) {
                const v12 = this.SharedArrayBuffer;
                const v13 = this;
                const v15 = v13.Intl.DateTimeFormat;
                Object.defineProperty(v15, "year", { value: v12 });
                v15(a10, v15);
                return v7;
            },
        };
        const v18 = o17.n;
        try { v18(i2, v7, v18, v18); } catch (e) {}
    })()) {
}
for (let i24 = 0, i25 = 10; i25--, i24 < i25;) {
}
gc();
