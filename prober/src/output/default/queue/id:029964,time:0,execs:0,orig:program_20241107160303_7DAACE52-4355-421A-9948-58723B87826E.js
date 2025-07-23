for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = `
`;
const v11 = `
    for (let i13 = 10, i14 = 10;
        (() => {
            class C16 {
                constructor(a18, a19, a20, a21) {
                    class C22 {
                        [a21] = Int8Array;
                    }
                }
            }
            return 8 < i14;
        })();
        ) {
    }
`;
const v28 = v11.replaceAll(8, v9);
for (let i31 = -3, i32 = 10;
    (() => {
        const v33 = 8 < i32;
        class C34 {
            constructor(a36) {
                const v38 = `
                    \`match${C34}getUint32${v28}o\`;
                `;
                const v40 = v38.split(a36);
                v40.reverse(8);
                v40.flatMap(eval);
            }
        }
        try { new C34(C34); } catch (e) {}
        return v33;
    })();
    i32--) {
}
gc();
