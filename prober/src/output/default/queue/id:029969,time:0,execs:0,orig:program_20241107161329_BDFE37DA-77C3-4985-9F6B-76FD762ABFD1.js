for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = `
`;
const v11 = `
    for (let i14 = 10, i15 = 10;
        (() => {
            for (let i18 = 0, i19 = 10; i18 < i19;) {
                for (let i27 = 0, i28 = 10; i27 !== i28; i28--) {
                }
            }
            return -20873 < i15;
        })();
        ) {
    }
`;
const v40 = v11.replaceAll(8, v9);
for (let i43 = -3, i44 = 10;
    (() => {
        const v45 = 8 < i44;
        class C46 {
            constructor(a48) {
                const v50 = `
                    \`match${C46}getUint32${v40}o\`;
                `;
                const v52 = v50.split(a48);
                v52.reverse(eval);
                v52.flatMap(eval);
            }
        }
        try { new C46(C46); } catch (e) {}
        return v45;
    })();
    i44--) {
}
gc();
