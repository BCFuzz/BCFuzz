const v2 = new Uint8Array(127, 127, 127);
for (let [i62, i63] = (() => {
        for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
        }
        for (let i15 = 0, i16 = 2520; i16; i16--) {
        }
        const v22 = `
            v2[7] = 127;
        `;
        const v24 = `
            for (let i26 = 10, i27 = 10;
                (() => {
                    for (let v28 = 0; v28 < 5; v28++) {
                    }
                    const o33 = {
                        toString(a30, a31) {
                            /\u{12345}/myvis;
                            return i27;
                        },
                    };
                    return 8 < i27;
                })();
                ) {
            }
        `;
        const v39 = v24.replaceAll(8, v22);
        for (let i42 = -3, i43 = 10;
            (() => {
                const v44 = 8 < i43;
                class C45 {
                    constructor(a47) {
                        const v49 = `
                            \`match${C45}getUint32${v39}o\`;
                        `;
                        const v51 = v49.split(a47);
                        v51.reverse(v2);
                        v51.flatMap(eval);
                    }
                }
                try { new C45(C45); } catch (e) {}
                return v44;
            })();
            i43--) {
        }
        return [0, 10];
    })();
    i62 < i63;
    i63--) {
}
gc();
