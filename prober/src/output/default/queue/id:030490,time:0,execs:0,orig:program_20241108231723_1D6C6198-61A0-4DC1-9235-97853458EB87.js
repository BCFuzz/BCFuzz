const v0 = `
    ([[13558,1024,1073741824,6,-13,-1024]]).flatMap();
    /\u{12345}/myvis;
`;
const v6 = v0.replaceAll();
for (let i9 = -3, i10 = 10; 8 < i10; i10--) {
}
const v18 = `
    class C20 {
        static 8 = Uint32Array;
    }
`;
const v21 = v18.replaceAll(8, v6);
for (let i24 = -3, i25 = 127;
    (() => {
        const v26 = 8 < i25;
        class C27 {
            constructor(a29) {
                const v31 = `
                    \`match${C27}getUint32${v21}o\`;
                `;
                const v33 = v31.split(a29);
                v33.reverse();
                v33.flatMap(eval);
            }
        }
        try { new C27(C27); } catch (e) {}
        return v26;
    })();
    i25--) {
}
gc();
