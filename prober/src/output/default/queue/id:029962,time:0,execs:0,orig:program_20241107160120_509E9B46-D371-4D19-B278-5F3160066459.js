const v0 = `
    v0 === v0;
`;
const v3 = `
    for (let v4 = 0; v4 < 5; v4++) {
    }
`;
const v5 = v3.replaceAll(8, v0);
for (let i8 = -3, i9 = 10;
    (() => {
        const v10 = 8 < i9;
        class C11 {
            constructor(a13) {
                const v15 = `
                    \`match${C11}getUint32${v5}o\`;
                `;
                const v17 = v15.split(a13);
                v17.reverse();
                v17.flatMap(eval);
            }
        }
        try { new C11(C11); } catch (e) {}
        return v10;
    })();
    i9--) {
}
for (let i27 = 8, i28 = 10; i27 < i28; i28--) {
}
gc();
