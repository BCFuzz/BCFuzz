for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v11 = `
    for (let i14 = 10, i15 = 10;
        (() => {
            const v16 = -20873 < i15;
            function f17(a18) {
                return i15;
            }
            class C19 extends f17 {
                8;
            }
            return v16;
        })();
        ) {
    }
`;
const v24 = v11.replaceAll(8, "");
for (let i27 = 265556202, i28 = 10;
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
