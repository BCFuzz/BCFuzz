for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
const v20 = `
`;
const v22 = `
    for (let v23 = 0; v23 < 5; v23++) {
    }
`;
const v24 = v22.replaceAll(8, v20);
for (let i27 = -3, i28 = 10;
    (() => {
        const v29 = 8 < i28;
        class C30 {
            constructor(a32) {
                const v34 = `
                    \`match${C30}getUint32${v24}o\`;
                `;
                const v36 = v34.split(a32);
                v36.reverse();
                v36.flatMap(eval);
            }
        }
        try { new C30(C30); } catch (e) {}
        return v29;
    })();
    i28--) {
}
gc();
