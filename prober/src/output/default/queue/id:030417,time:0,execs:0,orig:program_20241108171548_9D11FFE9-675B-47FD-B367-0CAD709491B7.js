const v2 = new Uint8Array(127);
for (let [i54, i55] = (() => {
        for (let i5 = 0, i6 = 2520; i6; i6--) {
        }
        const v12 = `
            v2[7] = 127;
        `;
        const v14 = `
            for (let i16 = 10, i17 = 10;
                (() => {
                    for (let i19 = -2976, i20 = 8; i19 !== i20;) {
                    }
                    return 8 < i17;
                })();
                ) {
            }
        `;
        const v31 = v14.replaceAll(8, v12);
        for (let i34 = -3, i35 = 10;
            (() => {
                const v36 = 8 < i35;
                class C37 {
                    constructor(a39) {
                        const v41 = `
                            \`match${C37}getUint32${v31}o\`;
                        `;
                        const v43 = v41.split(a39);
                        v43.reverse(eval);
                        v43.flatMap(eval);
                    }
                }
                try { new C37(C37); } catch (e) {}
                return v36;
            })();
            i35--) {
        }
        return [0, 10];
    })();
    i54 < i55;
    i55--) {
}
gc();
