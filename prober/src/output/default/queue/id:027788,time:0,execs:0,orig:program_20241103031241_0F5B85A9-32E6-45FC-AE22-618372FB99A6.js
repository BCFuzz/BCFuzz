for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const o27 = {
            n(a9, a10, a11) {
                for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
                }
                const v22 = this;
                const v23 = v22.Float16Array;
                const v25 = new ArrayBuffer(a10);
                const v26 = new v23(v25);
                return v26;
            },
        };
        const t12 = o27.n;
        t12();
    })()) {
}
gc();
