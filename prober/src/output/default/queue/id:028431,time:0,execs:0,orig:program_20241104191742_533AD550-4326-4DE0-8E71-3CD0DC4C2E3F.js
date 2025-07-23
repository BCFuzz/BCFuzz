const v0 = `
    async function* f1(a2, a3) {
        function f4(a5, a6) {
            const o13 = {
                n(a8) {
                    const v9 = \`
                        /[^\u{12345}\u{23456}]/mvgi;
                    \`;
                    return eval(v9);
                },
            };
            o13.n();
            return v0;
        }
        a2.then = f4;
        return f1;
    }
    f1(f1);
`;
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
    for (let i28 = 0, i29 = 10; i29--, i28 < i29;) {
    }
}
const v37 = eval(v0);
v37.next(v0, v0, v37);
gc();
