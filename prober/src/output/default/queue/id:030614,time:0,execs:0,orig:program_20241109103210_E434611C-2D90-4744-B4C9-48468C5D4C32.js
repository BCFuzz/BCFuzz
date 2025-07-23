for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = `
    class C10 {
    }
`;
const v12 = `
    g = 8;
`;
const v13 = v12.replaceAll(8, v9);
for (let i16 = -3, i17 = 10;
    (() => {
        const v18 = 8 < i17;
        class C19 {
            constructor(a21) {
                const v23 = `
                    \`match${C19}getUint32${v13}o\`;
                `;
                const v25 = v23.split(a21);
                v25.reverse();
                v25.flatMap(eval);
            }
        }
        try { new C19(C19); } catch (e) {}
        return v18;
    })();
    i17--) {
}
gc();
