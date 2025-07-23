for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v11 = `
    for (let i13 = 10, i14 = 10;
        (() => {
            class C15 {
                static 88;
            }
            return 8 < i14;
        })();
        ) {
    }
`;
const v21 = v11.replaceAll(8, "");
for (let i24 = -3, i25 = 10;
    (() => {
        const v26 = 8 < i25;
        class C27 {
            constructor(a29) {
                const v31 = `
                    \`match${C27}getUint32${v21}o\`;
                `;
                const v33 = v31.split(a29);
                v33.reverse();
                v33.flatMap(eval);
            }
        }
        try { new C27(C27); } catch (e) {}
        return v26;
    })();
    i25--) {
}
gc();
