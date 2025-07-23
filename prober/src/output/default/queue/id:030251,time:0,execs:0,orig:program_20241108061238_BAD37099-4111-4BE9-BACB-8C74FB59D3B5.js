for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v11 = `
    class C13 {
        static 8 = Uint32Array;
    }
`;
const v14 = v11.replaceAll(8, "");
for (let i17 = -3, i18 = 127;
    (() => {
        const v19 = 8 < i18;
        class C20 {
            constructor(a22) {
                const v24 = `
                    \`match${C20}getUint32${v14}o\`;
                `;
                const v26 = v24.split(a22);
                v26.reverse(this, i17);
                v26.flatMap(eval);
            }
        }
        try { new C20(C20); } catch (e) {}
        return v19;
    })();
    i18--) {
}
gc();
