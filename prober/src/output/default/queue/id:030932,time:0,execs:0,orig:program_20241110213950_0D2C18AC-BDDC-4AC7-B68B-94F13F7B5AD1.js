for (let i2 = 0, i3 = 1; i3; i3--) {
}
const v9 = `
`;
const v11 = `
    function* f12(a13, a14) {
        yield 8;
        return a14;
    }
`;
const v16 = v11.replaceAll(8, v9);
for (let i19 = -3, i20 = 10;
    (() => {
        const v21 = 8 < i20;
        class C22 {
            constructor(a24) {
                const v26 = `
                    \`match${C22}getUint32${v16}o\`;
                `;
                const v28 = v26.split(a24);
                v28.reverse();
                v28.flatMap(eval);
            }
        }
        try { new C22(C22); } catch (e) {}
        return v21;
    })();
    i20--) {
}
gc();
