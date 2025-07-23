const v0 = `
`;
const v2 = `
    for (let i5 = 10, i6 = -20873; -20873 < i6;) {
    }
`;
const v12 = v2.replaceAll(8, v0);
for (let i15 = -3, i16 = 10;
    (() => {
        const v17 = 8 < i16;
        class C18 {
            constructor(a20) {
                const v22 = `
                    \`match${C18}getUint32${v12}o\`;
                `;
                const v24 = v22.split(a20);
                v24.reverse();
                v24.flatMap(eval);
            }
        }
        try { new C18(C18); } catch (e) {}
        return v17;
    })();
    i16--) {
}
for (let i34 = 8, i35 = 10; i34 < i35; i35--) {
}
gc();
