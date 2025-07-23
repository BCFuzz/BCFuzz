for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = `
`;
const v11 = `
    for (let i13 = 10, i14 = 10;
        (() => {
            for (let v15 = 0; v15 < 5; v15++) {
            }
            return 8 < i14;
        })();
        ) {
    }
`;
const v21 = v11.replaceAll(8, v9);
for (let i24 = -3, i25 = 10;
    (() => {
        const v26 = 8 < i25;
        class C27 {
            constructor(a29) {
                const v31 = `
                    \`match${C27}getUint32${v21}o\`;
                `;
                const v33 = v31.split(a29);
                v33.reverse(v9, this, C27, v33);
                v33.flatMap(eval);
            }
        }
        try { new C27(C27); } catch (e) {}
        return v26;
    })();
    i25--) {
}
gc();
