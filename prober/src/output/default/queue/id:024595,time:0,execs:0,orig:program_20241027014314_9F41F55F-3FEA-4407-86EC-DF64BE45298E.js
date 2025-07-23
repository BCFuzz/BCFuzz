const v0 = `
    async function* f1(a2, a3) {
        const o7 = {
            toString(a5) {
                this >= a5;
                return this;
            },
        };
        let v8;
        try { v8 = o7.toString(); } catch (e) {}
        return v8;
    }
    f1(v0, v0);
`;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
eval(v0).next();
gc();
