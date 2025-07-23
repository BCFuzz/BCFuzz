const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint16Array();
        const v7 = null != v6;
        !v7;
        if (v7) {
        }
        return v0;
    }
    f1(f1, v0);
`;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
    for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
    }
}
eval(v0).next();
gc();
