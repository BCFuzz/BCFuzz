const v2 = new Uint8Array();
for (let [i47, i48] = (() => {
        for (let i5 = 0, i6 = 2520; i6; i6--) {
        }
        const v12 = `
            v2[7] = 127;
        `;
        const v14 = `
            for (let i16 = 10, i17 = 10;
                (() => {
                    for (let v18 = 0; v18 < 5; v18++) {
                    }
                    return 8 < i17;
                })();
                ) {
            }
        `;
        const v24 = v14.replaceAll(8, v12);
        for (let i27 = -3, i28 = 10;
            (() => {
                const v29 = 8 < i28;
                class C30 {
                    constructor(a32) {
                        const v34 = `
                            \`match${C30}getUint32${v24}o\`;
                        `;
                        const v36 = v34.split(a32);
                        v36.reverse(v36, v36, this);
                        v36.flatMap(eval);
                    }
                }
                try { new C30(C30); } catch (e) {}
                return v29;
            })();
            i28--) {
        }
        return [0, 10];
    })();
    i47 < i48;
    i48--) {
}
gc();
