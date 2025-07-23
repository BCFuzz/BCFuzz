for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = `
    async function* f10(a11, a12) {
        return a11;
    }
`;
const v14 = `
    [1000000000.0,-2.0,-822.2701748699242,-5.0];
`;
const v16 = v14.replaceAll(8, v9);
for (let i19 = -3, i20 = 10;
    (() => {
        const v21 = 8 < i20;
        class C22 {
            constructor(a24) {
                const v26 = `
                    \`match${C22}getUint32${v16}o\`;
                `;
                const v28 = v26.split(a24);
                v28.reverse(i19, eval, eval);
                v28.flatMap(eval);
            }
        }
        try { new C22(C22); } catch (e) {}
        return v21;
    })();
    i20--) {
}
gc();
