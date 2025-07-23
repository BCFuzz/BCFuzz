for (let i2 = 3, i3 = 10; i3; i3--) {
}
const v9 = /Ih*/vgi;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v20 = `
    async function* f21(a22, a23, a24) {
        return a22;
    }
`;
const v25 = v20.split(v9);
const v27 = `
    class C29 {
        static 8 = Uint32Array;
    }
`;
const v30 = v27.replaceAll(8, v25);
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
