for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v11 = `
    const o17 = {
        toString(a14, a15) {
            /\u{12345}/myvis;
            return this;
        },
    };
    class C18 {
        static 8 = Uint32Array;
    }
`;
const v19 = v11.replaceAll(8, "");
for (let i22 = -3, i23 = 10;
    (() => {
        const v24 = 8 < i23;
        class C25 {
            constructor(a27) {
                const v29 = `
                    \`match${C25}getUint32${v19}o\`;
                `;
                const v31 = v29.split(a27);
                v31.reverse();
                v31.flatMap(eval);
            }
        }
        try { new C25(C25); } catch (e) {}
        return v24;
    })();
    i23--) {
}
for (let i42 = -3, i43 = 10; i42 < i43; i43--) {
}
gc();
