const v0 = `
    async function* f1(a2, a3) {
        (undefined >>> undefined) >= 268435439;
        function f8(a9, a10, a11, a12) {
            return a3;
        }
        if (!f8) {
        }
        return v0;
    }
    f1();
`;
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
const v25 = eval(v0);
v25.next(v0, eval, v25, v25);
gc();
