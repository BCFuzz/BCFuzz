function f0(a1) {
    const o2 = {
    };
    return o2;
}
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
for (let i15 = 0, i16 = 10;
    i15 < i16;
    (() => {
        i16--;
        const o29 = {
            n(a22, a23, a24) {
                const v25 = this;
                const v26 = v25.Intl;
                v26.toString = f0;
                const v27 = v26.DateTimeFormat;
                v27.timeZoneName = v26;
                v27(a23, v27);
                return a23;
            },
        };
        const v30 = o29.n;
        try { v30(f0, i16); } catch (e) {}
    })()) {
}
gc();
