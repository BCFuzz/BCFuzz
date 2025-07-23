const v0 = [5,22833,127,-1024];
for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const o18 = {
            n(a10, a11, a12) {
                const v13 = this;
                const v15 = v13.Intl.DateTimeFormat;
                return v15(a11, v15, v0, v15).format(v0);
            },
        };
        const v19 = o18.n;
        try { v19(v0, o18); } catch (e) {}
    })()) {
}
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
gc();
