const v3 = `
    for (let [i7, i8] = (() => {
            /\u{12345}/myvis;
            class C6 {
                static 8 = -2147483649;
            }
            return [10, 10];
        })();
        8 < i8;
        ) {
    }
`;
const v14 = v3.replaceAll(8, "");
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
gc();
