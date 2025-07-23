const o52 = {
    n(a1, a2, a3) {
        const v4 = `
            async function* f5(a6, a7) {
            }
        `;
        const v9 = `
            const v10 = \`
                /\u{12345}3ya(?!b)*/myvis;
            \`;
            for (let i14 = 0, i15 = 10; i14 < i15;) {
            }
            for (let i23 = 0, i24 = 10; i23 < i24;) {
            }
            for (let v30 = 0; v30 < 5; v30++) {
            }
        `;
        const v31 = v9.replaceAll(8, v4);
        for (let i34 = -3, i35 = 10;
            (() => {
                const v36 = 8 < i35;
                class C37 {
                    constructor(a39) {
                        const v41 = `
                            \`match${C37}getUint32${v31}o\`;
                        `;
                        const v43 = v41.split(a39);
                        v43.reverse();
                        v43.flatMap(eval);
                    }
                }
                try { new C37(C37); } catch (e) {}
                return v36;
            })();
            i35--) {
        }
    },
};
const t38 = o52.n;
t38();
gc();
