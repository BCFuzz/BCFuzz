for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = `
`;
const v11 = `
    for (let i14 = 10, i15 = 10;
        (() => {
            const v16 = -20873 < i15;
            if (-20873 == v16) {
            }
            return v16;
        })();
        ) {
    }
`;
const v22 = v11.replaceAll(8, v9);
class C23 {
    constructor(a25) {
        const v27 = `
            \`match${C23}getUint32${v22}o\`;
        `;
        const v29 = v27.split(a25);
        v29.reverse();
        v29.flatMap(eval);
    }
}
try { new C23(C23); } catch (e) {}
gc();
