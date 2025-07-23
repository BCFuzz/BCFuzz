const v0 = `
    const v1 = \`
        async function* f2(a3, a4) {
            for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
            }
            const v16 = JSON.stringify(v1);
            for (let [i21, i22] = (() => {
                    eval(v16);
                    return [0, 10];
                })();
                i22--, i21 < i22;
                ) {
            }
            return /(9a\D((\xed\xa0\x80))\x02)/dgsu;
        }
        f2(v0, f2);
    \`;
    for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
        for (let i43 = 0, i44 = 10; i43 < i44; i44--) {
        }
    }
    eval(v1).next();
`;
eval(v0);
gc();
