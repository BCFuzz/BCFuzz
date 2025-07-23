const v0 = `
    async function* f1(a2, a3) {
        const o7 = {
            toString(a5) {
                return this > a5;
            },
        };
        try { o7.toString(); } catch (e) {}
        return f1;
    }
    f1(f1, f1);
`;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
eval(v0).next();
gc();
