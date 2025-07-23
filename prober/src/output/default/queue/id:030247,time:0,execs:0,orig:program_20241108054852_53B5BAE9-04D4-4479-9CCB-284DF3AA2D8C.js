const v0 = `
    async function* f1(a2, a3) {
        const o8 = {
            toString(a5, a6) {
                /\u{12345}/myvis;
                return v0;
            },
        };
        return a3;
    }
`;
for (let [i36, i37] = (() => {
        const v11 = `
            class C13 {
                static 8 = Uint32Array;
            }
        `;
        const v14 = v11.replaceAll(8, v0);
        for (let i17 = -3, i18 = 10;
            (() => {
                const v19 = 8 < i18;
                class C20 {
                    constructor(a22) {
                        const v24 = `
                            \`match${C20}getUint32${v14}o\`;
                        `;
                        const v26 = v24.split(a22);
                        v26.reverse();
                        v26.flatMap(eval);
                    }
                }
                try { new C20(C20); } catch (e) {}
                return v19;
            })();
            i18--) {
        }
        return [0, 10];
    })();
    i36 != i37;
    i37--) {
    for (let i46 = 0, i47 = 10; i46 < i47; i47--) {
    }
}
gc();
