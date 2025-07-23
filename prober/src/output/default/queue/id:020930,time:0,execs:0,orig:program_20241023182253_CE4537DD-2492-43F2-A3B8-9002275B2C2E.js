for (let i3 = 0, i4 = 10;
    i4--, i3 < i4;
    (() => {
        const o17 = {
            n(a10, a11, a12) {
                const v13 = this;
                const v15 = v13.Intl.DateTimeFormat;
                v15.second = "c";
                return v15(a11, v15);
            },
        };
        const v18 = o17.n;
        try { v18(v18, i3, o17); } catch (e) {}
    })()) {
}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
