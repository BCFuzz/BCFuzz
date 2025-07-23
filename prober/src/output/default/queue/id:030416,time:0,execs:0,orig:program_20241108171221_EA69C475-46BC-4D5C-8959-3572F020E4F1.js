for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = [0.47665415299778424,-880.5129325527367,-11.733338300603918,-1000.0];
const v12 = `
    for (let [i15, i16] = (() => {
            class C14 {
                static 8 = -2147483649;
            }
            return [10, 10];
        })();
        8 < i16;
        ) {
    }
`;
const v22 = v12.replaceAll(8, v9);
for (let i25 = -3, i26 = 10;
    (() => {
        const v27 = 8 < i26;
        class C28 {
            constructor(a30) {
                const v32 = `
                    \`match${C28}getUint32${v22}o\`;
                `;
                const v34 = v32.split(a30);
                v34.reverse(v34);
                v34.flatMap(eval);
            }
        }
        try { new C28(C28); } catch (e) {}
        return v27;
    })();
    i26--) {
}
gc();
