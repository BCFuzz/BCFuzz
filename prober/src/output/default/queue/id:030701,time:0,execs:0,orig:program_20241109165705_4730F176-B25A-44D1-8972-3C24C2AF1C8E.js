const v0 = `
    ([[13558,1024,1073741824,6,-13,-1024]]).flatMap();
`;
const v5 = v0.replaceAll();
for (let i8 = -3, i9 = 10; 8 < i9; i9--) {
}
const v17 = `
    class C19 {
        static 8 = Uint32Array;
    }
`;
const v20 = v17.replaceAll(8, v5);
for (let i23 = -48941, i24 = 127;
    (() => {
        const v25 = 8 < i24;
        class C26 {
            constructor(a28) {
                const v30 = `
                    \`match${C26}getUint32${v20}o\`;
                `;
                const v32 = v30.split(a28);
                v32.reverse();
                v32.flatMap(eval);
            }
        }
        try { new C26(C26); } catch (e) {}
        return v25;
    })();
    i24--) {
}
gc();
