for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = [0.47665415299778424,-880.5129325527367,-11.733338300603918,-1000.0];
const v12 = `
    for (let [i16, i17] = (() => {
            /\u{12345}/myvis;
            class C15 {
                static 8 = -2147483649;
            }
            return [10, 10];
        })();
        8 < i17;
        ) {
    }
`;
const v23 = v12.replaceAll(8, v9);
for (let i26 = -3, i27 = 10;
    (() => {
        const v28 = 8 < i27;
        class C29 {
            constructor(a31) {
                const v33 = `
                    \`match${C29}getUint32${v23}o\`;
                `;
                const v35 = v33.split(a31);
                v35.reverse();
                v35.flatMap(eval);
            }
        }
        try { new C29(C29); } catch (e) {}
        return v28;
    })();
    i27--) {
}
gc();
