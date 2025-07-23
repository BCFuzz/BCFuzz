for (let i2 = 0, i3 = 10; i3; i3--) {
}
const v9 = /Ih*/vgi;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v20 = `
    async function* f21(a22, a23, a24) {
        /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
        return a24;
    }
`;
const v26 = v20.split(v9);
const v28 = `
    class C30 {
        static 8 = Uint32Array;
    }
`;
const v31 = v28.replaceAll(8, v26);
for (let i34 = -3, i35 = 10;
    (() => {
        const v36 = 8 < i35;
        class C37 {
            constructor(a39) {
                const v41 = `
                    \`match${C37}getUint32${v31}o\`;
                `;
                const v43 = v41.split(a39);
                v43.reverse(v43, i34);
                v43.flatMap(eval);
            }
        }
        try { new C37(C37); } catch (e) {}
        return v36;
    })();
    i35--) {
}
gc();
