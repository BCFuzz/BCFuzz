const v3 = `
    8 != "" ? 8 : "";
`;
const v6 = v3.replaceAll(8, "");
for (let i9 = -3, i10 = 10;
    (() => {
        const v11 = 8 < i10;
        class C12 {
            constructor(a14) {
                const v16 = `
                    \`match${C12}getUint32${v6}o\`;
                `;
                const v18 = v16.split(a14);
                v18.reverse();
                v18.flatMap(eval);
            }
        }
        try { new C12(C12); } catch (e) {}
        return v11;
    })();
    i10--) {
}
gc();
