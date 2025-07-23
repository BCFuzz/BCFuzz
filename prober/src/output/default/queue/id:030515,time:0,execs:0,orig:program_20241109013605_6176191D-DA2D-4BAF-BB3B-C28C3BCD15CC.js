for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let [i42, i43] = (() => {
        for (let i12 = 0, i13 = 10;
            (() => {
                i13--;
                for (let i17 = -3, i18 = 10;
                    (() => {
                        for (let i21 = 0, i22 = 10; i21 !== i22; i22--) {
                        }
                        return i17 < i18;
                    })();
                    i18--) {
                }
                return i12 < i13;
            })();
            ) {
        }
        return [0, 10];
    })();
    (() => {
        const v44 = i42 < i43;
        const v46 = `
            for (let v47 = 0; v47 < 5; v47++) {
                v47 < v47;
            }
            for (let v49 = 0; v49 < 5; v49++) {
            }
            const o55 = {
                n(a51, a52, a53) {
                    /\u{12345}/myvis;
                    return a51;
                },
            };
        `;
        const v56 = v46.replaceAll();
        for (let i59 = -3, i60 = 10;
            (() => {
                const v61 = 8 < i60;
                class C62 {
                    constructor(a64) {
                        const v65 = `
                            \`match${C62}getUint32${v56}o\`;
                        `;
                        v65.split(a64);
                    }
                }
                function f68() {
                    const v69 = `
                    `;
                    return v69;
                }
                C62[Symbol.toPrimitive] = f68;
                new C62(C62);
                return v61;
            })();
            i60--) {
        }
        return v44;
    })();
    i43--) {
}
for (let i85 = 0, i86 = 10; i85 !== i86; i86--) {
}
gc();
