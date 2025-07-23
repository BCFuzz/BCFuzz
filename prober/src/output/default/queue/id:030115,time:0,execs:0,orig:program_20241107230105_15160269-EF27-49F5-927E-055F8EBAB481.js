for (let i3 = 0, i4 = 127; i3 < i4; i4--) {
}
for (let i14 = 0, i15 = 10 + 10;
    i15--, i15;
    (() => {
        for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
        }
    })()) {
}
for (let i33 = 0, i34 = 2520; i34; i34--) {
}
const v42 = `
    for (let [i45, i46] = (() => {
            class C44 {
                static 8 = -2147483649;
            }
            return [10, 10];
        })();
        8 < i46;
        ) {
    }
`;
const v52 = v42.replaceAll(8, "");
for (let i55 = -3, i56 = 10;
    (() => {
        const v57 = 8 < i56;
        class C58 {
            constructor(a60) {
                const v62 = `
                    \`match${C58}getUint32${v52}o\`;
                `;
                const v64 = v62.split(a60);
                v64.reverse(this, v52, a60, v57, i56);
                v64.flatMap(eval);
            }
        }
        try { new C58(C58); } catch (e) {}
        return v57;
    })();
    i56--) {
}
gc();
