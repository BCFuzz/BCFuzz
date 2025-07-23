const v2 = new Uint8Array(127, 127, 127);
for (let [i59, i60] = (() => {
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
                    const o30 = {
                        toString(a27, a28) {
                            /\u{12345}/myvis;
                            return v2;
                        },
                    };
                    return 8 < i17;
                })();
                ) {
            }
        `;
        const v36 = v14.replaceAll(8, v12);
        for (let i39 = -3, i40 = 10;
            (() => {
                const v41 = 8 < i40;
                class C42 {
                    constructor(a44) {
                        const v46 = `
                            \`match${C42}getUint32${v36}o\`;
                        `;
                        const v48 = v46.split(a44);
                        v48.reverse();
                        v48.flatMap(eval);
                    }
                }
                try { new C42(C42); } catch (e) {}
                return v41;
            })();
            i40--) {
        }
        return [0, 10];
    })();
    i59 < i60;
    i60--) {
}
gc();
