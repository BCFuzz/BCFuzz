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
        const v45 = `
        `;
        const v47 = `
            for (let i50 = 0, i51 = 10; i50 < i51;) {
            }
            for (let i59 = 16, i60 = 1851; i59 < i60;) {
            }
            const o71 = {
                n(a67, a68, a69) {
                    /\u{12345}/myvis;
                    return a67;
                },
            };
        `;
        const v72 = v47.replaceAll(8, v45);
        for (let i75 = -3, i76 = 10;
            (() => {
                const v77 = 8 < i76;
                class C78 {
                    constructor(a80) {
                        const v82 = `
                            \`match${C78}getUint32${v72}o\`;
                        `;
                        const v84 = v82.split(a80);
                        v84.reverse();
                        v84.flatMap(eval);
                    }
                }
                try { new C78(C78); } catch (e) {}
                return v77;
            })();
            i76--) {
        }
        return v44;
    })();
    i43--) {
}
for (let i100 = 0, i101 = 10; i100 !== i101; i101--) {
}
gc();
