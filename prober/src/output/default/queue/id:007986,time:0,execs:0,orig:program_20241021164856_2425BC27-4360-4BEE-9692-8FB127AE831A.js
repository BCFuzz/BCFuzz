const v0 = `
    function f1(a2, a3, a4) {
        const v5 = \`
            let v6 = 2n;
            v6--;
            const o14 = {
                [v6](a9, a10, a11, a12) {
                    const v13 = \\\`
                    \\\`;
                },
            };
            o14[2];
        \`;
    }
`;
eval(v0);
gc();
