for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10;
    i12 < i13;
    (() => {
        const v17 = i13--;
        const o26 = {
            n(a19, a20, a21) {
                const v22 = this;
                const v23 = v22.Intl;
                const v24 = v23.DateTimeFormat;
                v24.timeZoneName = v23;
                v24(a20, v24);
                return v22;
            },
        };
        const v27 = o26.n;
        try { v27(v17, i12, o26, i13); } catch (e) {}
    })()) {
}
gc();
