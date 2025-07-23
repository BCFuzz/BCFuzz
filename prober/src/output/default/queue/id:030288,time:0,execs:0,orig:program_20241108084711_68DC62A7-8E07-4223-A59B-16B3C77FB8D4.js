for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
const v20 = `
    async function* f21(a22, a23) {
        for (let i26 = 0, i27 = 10; i26 < i27;) {
        }
        return f21;
    }
`;
for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
    for (let i45 = 0, i46 = 10; i45 < i46; i46--) {
    }
    for (let i55 = 0, i56 = 10; i55 < i56; i56--) {
    }
}
const v64 = `
    class C66 {
        static 8 = Uint32Array;
    }
`;
const v67 = v64.replaceAll(8, v20);
for (let i70 = -3, i71 = 127;
    (() => {
        const v72 = 8 < i71;
        class C73 {
            constructor(a75) {
                const v77 = `
                    \`match${C73}getUint32${v67}o\`;
                `;
                const v79 = v77.split(a75);
                v79.reverse(C73, v67);
                v79.flatMap(eval);
            }
        }
        try { new C73(C73); } catch (e) {}
        return v72;
    })();
    i71--) {
}
gc();
