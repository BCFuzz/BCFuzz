for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = `
`;
const v11 = `
    for (let i14 = 10, i15 = 10;
        (() => {
            for (let i18 = 0, i19 = 10; i18 < i19;) {
            }
            return -20873 < i15;
        })();
        ) {
    }
`;
const v30 = v11.replaceAll(8, v9);
for (let i33 = -3, i34 = 10;
    (() => {
        const v35 = 8 < i34;
        class C36 {
            constructor(a38) {
                const v40 = `
                    \`match${C36}getUint32${v30}o\`;
                `;
                const v42 = v40.split(a38);
                v42.reverse();
                v42.flatMap(eval);
            }
        }
        try { new C36(C36); } catch (e) {}
        return v35;
    })();
    i34--) {
}
gc();
