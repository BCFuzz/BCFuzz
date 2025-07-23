for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Uint8Array(127, 127, 127);
const v13 = `
    v12[7] = 127;
`;
for (let i17 = -3, i18 = 10; i17 < i18; i18--) {
}
const v25 = `
    for (let v26 = 0; v26 < 5; v26++) {
    }
    /\u{12345}/myvis;
`;
const v28 = v25.replaceAll(0, v13);
for (let i31 = -3, i32 = 10;
    (() => {
        const v33 = 0 < i32;
        class C34 {
            constructor(a36) {
                const v38 = `
                    \`match${C34}getUint32${v28}o\`;
                `;
                v38.split(a36).reverse(v33, a36, a36).flatMap(eval);
            }
        }
        try { new C34(C34); } catch (e) {}
        return v33;
    })();
    i32--) {
}
for (let i51 = 0, i52 = 10; i51 != i52; i52--) {
}
gc();
