for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i13 = 0, i14 = 10;
    i13 < i14;
    (() => {
        i14--;
        const o27 = {
            n(a20, a21, a22) {
                const v23 = this;
                const v25 = v23.Intl.DateTimeFormat;
                Object.defineProperty(v25, "year", { writable: true, enumerable: true, value: 268435439 });
                v25(a21, v25);
                return 268435439;
            },
        };
        const v28 = o27.n;
        try { v28(); } catch (e) {}
    })()) {
}
gc();
