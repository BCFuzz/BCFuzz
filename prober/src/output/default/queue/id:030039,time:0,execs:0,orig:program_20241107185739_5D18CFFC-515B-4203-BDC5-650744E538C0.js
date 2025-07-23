for (let i2 = 0, i3 = 2520; i3; i3--) {
}
const v9 = `
`;
const v11 = `
    const o17 = {
        toString(a14, a15) {
            /\u{12345}/myvis;
            return a15;
        },
    };
    class C18 {
        constructor(a20, a21, a22, a23) {
            class C24 {
                [a23] = Int8Array;
            }
        }
    }
`;
const v25 = v11.replaceAll(8, v9);
for (let i28 = -3, i29 = 10;
    (() => {
        const v30 = 8 < i29;
        class C31 {
            constructor(a33) {
                const v35 = `
                    \`match${C31}getUint32${v25}o\`;
                `;
                const v37 = v35.split(a33);
                v37.reverse();
                v37.flatMap(eval);
            }
        }
        try { new C31(C31); } catch (e) {}
        return v30;
    })();
    i29--) {
}
for (let i48 = -3, i49 = 10; i48 < i49; i49--) {
}
gc();
