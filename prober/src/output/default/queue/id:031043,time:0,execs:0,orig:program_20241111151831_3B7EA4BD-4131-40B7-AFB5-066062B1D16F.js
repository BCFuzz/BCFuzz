for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i13 = 0, i14 = 10 + 10;
    (() => {
        const v15 = i14--;
        for (let i18 = 0, i19 = 10; i18 !== i19; i19--) {
        }
        for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
            for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
            }
        }
        const v46 = `
            class C47 {
                constructor(a49) {
                    function f50(a51, a52) {
                        return f50;
                    }
                }
            }
        `;
        const v53 = v46.replaceAll(v15, i14);
        class C54 {
            constructor(a56) {
                const v58 = `
                    \`match${C54}getUint32${v53}o\`;
                `;
                const v60 = v58.split(a56);
                v60.reverse();
                v60.flatMap(eval);
            }
        }
        try { new C54(C54); } catch (e) {}
        for (let i66 = 0, i67 = 10; i66 < i67; i67--) {
        }
        return i13 < i14;
    })();
    ) {
}
gc();
