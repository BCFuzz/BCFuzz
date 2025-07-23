for (let i2 = 0, i3 = 10; i3; i3--) {
}
const v9 = /Ih*/vgi;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v20 = `
    async function* f21(a22, a23, a24) {
        return f21;
    }
`;
const v25 = v20.split(v9);
const v27 = `
    typeof 8;
`;
const v29 = v27.replaceAll(8, v25);
for (let i32 = -3, i33 = 10;
    (() => {
        const v34 = 8 < i33;
        class C35 {
            constructor(a37) {
                const v39 = `
                    \`match${C35}getUint32${v29}o\`;
                `;
                const v41 = v39.split(a37);
                v41.reverse(v41, i32);
                v41.flatMap(eval);
            }
        }
        try { new C35(C35); } catch (e) {}
        return v34;
    })();
    i33--) {
}
gc();
