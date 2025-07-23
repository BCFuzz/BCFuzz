for (let i3 = 0, i4 = 10;
    i4--, i3 < i4;
    (() => {
        const o18 = {
            n(a10, a11, a12) {
                const v13 = this;
                const t3 = v13.Intl.DateTimeFormat.bind("undefined");
                t3();
                return i3;
            },
        };
        const v19 = o18.n;
        v19(v19, v19);
    })()) {
}
gc();
