const v1 = ("object").toLocaleLowerCase();
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        const v9 = i5--;
        const o18 = {
            n(a11, a12, a13) {
                const v14 = this;
                v14.Intl.DateTimeFormat.supportedLocalesOf(v1);
                return v9;
            },
        };
        const t8 = o18.n;
        t8();
    })()) {
}
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
gc();
