for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    i12 < i13;
    (() => {
        const v17 = i13--;
        const o26 = {
            n(a19, a20, a21) {
                const v22 = this;
                const v24 = v22.Intl.DateTimeFormat;
                Object.defineProperty(v24, "day", { writable: true, enumerable: true, value: i13 });
                return v24(a20, v24);
            },
        };
        const v27 = o26.n;
        try { v27(v17); } catch (e) {}
    })()) {
}
gc();
