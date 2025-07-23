const v0 = `
    async function* f1(a2, a3) {
        const v7 = (undefined >>> undefined) >= 268435439;
        function f8(a9, a10, a11, a12) {
            return a12;
        }
        if (!v7) {
        }
        return f1;
    }
    f1(f1, f1);
`;
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
eval(v0).next(v0);
gc();
