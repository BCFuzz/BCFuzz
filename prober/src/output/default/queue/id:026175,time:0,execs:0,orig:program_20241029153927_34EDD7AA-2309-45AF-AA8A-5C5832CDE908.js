const v0 = `
    const v1 = /\u{12345}/myvis;
    function f2() {
        return f2;
    }
    const o12 = {
        n(a5, a6, a7) {
            const v8 = this;
            const v9 = v8.Intl;
            const v10 = v9.Locale;
            v10.calendar = f2;
            try { new v10("split", v10); } catch (e) {}
            return v9;
        },
    };
    const t15 = o12.n;
    t15(v1, v0);
    for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    }
`;
eval(v0);
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
gc();
