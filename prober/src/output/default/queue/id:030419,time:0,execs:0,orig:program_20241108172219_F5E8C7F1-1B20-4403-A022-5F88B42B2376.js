for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Uint8Array();
const v13 = `
    v12[7] = 127;
`;
for (let i17 = -3, i18 = 10; i17 < i18; i18--) {
}
const v25 = `
    for (let v26 = 0; v26 < 5; v26++) {
    }
`;
const v27 = v25.replaceAll(0, v13);
for (let i30 = -3, i31 = 10;
    (() => {
        const v32 = 0 < i31;
        class C33 {
            constructor(a35) {
                const v37 = `
                    \`match${C33}getUint32${v27}o\`;
                `;
                v37.split(a35).reverse().flatMap(eval);
            }
        }
        try { new C33(C33); } catch (e) {}
        return v32;
    })();
    i31--) {
}
gc();
