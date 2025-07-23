const v0 = `
    for (let i3 = -3, i4 = 10;
        i3 < i4;
        (() => {
            i4--;
            const v9 = \`
                /\u{12345}/myvis;
                const v11 = \\\`
                    \\\\\\\`e\\\\\\\`;
                \\\`;
            \`;
        })()) {
    }
`;
eval(v0);
gc();
