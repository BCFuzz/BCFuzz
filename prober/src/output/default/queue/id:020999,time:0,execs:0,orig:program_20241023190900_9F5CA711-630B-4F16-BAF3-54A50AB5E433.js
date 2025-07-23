const v0 = `
    function f1(a2, a3) {
        return f1;
    }
`;
const o13 = {
    n(a5, a6, a7) {
        const v8 = this;
        const t8 = v8.Intl.NumberFormat;
        t8().formatToParts(v0);
        return a7;
    },
};
const v14 = o13.n;
v14(v14, o13);
gc();
