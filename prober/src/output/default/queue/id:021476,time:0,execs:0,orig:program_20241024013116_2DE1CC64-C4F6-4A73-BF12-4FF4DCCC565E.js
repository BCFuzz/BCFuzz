const v0 = `
    /\u{12345}/myvis;
`;
const o11 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        const t7 = v7.NumberFormat;
        t7().formatToParts(v0);
        return v7;
    },
};
const t12 = o11.n;
t12(v0, o11);
gc();
