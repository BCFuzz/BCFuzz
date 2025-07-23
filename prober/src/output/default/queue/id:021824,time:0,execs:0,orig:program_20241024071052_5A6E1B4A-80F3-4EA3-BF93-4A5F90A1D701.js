const v0 = `
    const v1 = \`
        /\u{12345}/myvis;
    \`;
    const o12 = {
        n(a4, a5, a6) {
            const v7 = this;
            const t7 = v7.Intl.NumberFormat;
            t7().formatToParts(v1);
            return v1;
        },
    };
    const t12 = o12.n;
    t12();
    for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    }
`;
eval(v0);
gc();
