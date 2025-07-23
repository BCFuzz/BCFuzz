for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = `
`;
const v11 = `
    for (let i14 = 10, i15 = 10;
        (() => {
            for (let i18 = 0, i19 = 10; i18 < i19;) {
                for (let [i45, i46] = (() => {
                        for (let i27 = 0, i28 = 10;
                            (() => {
                                for (let i31 = 0, i32 = 10; i31 < i32;) {
                                }
                                return i27 < i28;
                            })();
                            ) {
                        }
                        return [0, 10];
                    })();
                    i45 !== i46;
                    ) {
                }
            }
            return -20873 < i15;
        })();
        ) {
    }
`;
const v57 = v11.replaceAll(8, v9);
for (let i60 = -3, i61 = 10;
    (() => {
        const v62 = 8 < i61;
        class C63 {
            constructor(a65) {
                const v67 = `
                    \`match${C63}getUint32${v57}o\`;
                `;
                const v69 = v67.split(a65);
                v69.reverse();
                v69.flatMap(eval);
            }
        }
        try { new C63(C63); } catch (e) {}
        return v62;
    })();
    i61--) {
}
gc();
