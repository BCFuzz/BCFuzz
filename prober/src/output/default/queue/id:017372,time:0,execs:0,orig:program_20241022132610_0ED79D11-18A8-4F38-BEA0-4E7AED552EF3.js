const v1 = ~1.7976931348623157e+308;
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let i14 = 0, i15 = 10;
    i14 < i15;
    (() => {
        i15--;
        const o28 = {
            n(a21, a22, a23) {
                const v24 = this;
                const v26 = v24.Intl.DateTimeFormat;
                v26.era = v1;
                v26(a22, v26);
                return this;
            },
        };
        const v29 = o28.n;
        try { v29(v1, o28); } catch (e) {}
    })()) {
}
gc();
