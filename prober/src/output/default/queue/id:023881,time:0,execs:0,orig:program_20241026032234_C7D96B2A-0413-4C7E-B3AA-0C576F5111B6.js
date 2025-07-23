for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        const o16 = {
            n(a10, a11, a12) {
                const v14 = new Date(v7);
                v14.toLocaleString(v14, null);
                return this;
            },
        };
        const v17 = o16.n;
        try { v17(v7, v17, v17, i3); } catch (e) {}
    })()) {
}
gc();
