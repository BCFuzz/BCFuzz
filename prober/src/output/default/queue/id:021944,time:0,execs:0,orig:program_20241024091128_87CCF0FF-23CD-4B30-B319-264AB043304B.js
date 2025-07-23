const v1 = ("UGpMz").toLocaleLowerCase();
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        const v9 = i5--;
        const o18 = {
            n(a11, a12, a13) {
                const v14 = this;
                return v14.Intl.DateTimeFormat.supportedLocalesOf(v1);
            },
        };
        const t7 = o18.n;
        t7(o18, v9);
    })()) {
}
gc();
