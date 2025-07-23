for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    i12 < i13;
    (() => {
        i13--;
        const o27 = {
            n(a19, a20, a21) {
                const v22 = this.isFinite();
                const v23 = this;
                const v25 = v23.Intl.DateTimeFormat;
                Object.defineProperty(v25, "hour12", { writable: true, value: v22 });
                v25(a20, v25);
                return i13;
            },
        };
        const v28 = o27.n;
        v28(v28, i12);
    })()) {
}
gc();
