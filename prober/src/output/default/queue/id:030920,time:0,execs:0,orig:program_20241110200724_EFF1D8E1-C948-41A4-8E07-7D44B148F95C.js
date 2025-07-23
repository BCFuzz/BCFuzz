let v0 = 189;
for (let i3 = 0, i4 = 2520; i4; i4--) {
}
const v10 = `
    function f11(a12, a13) {
        return a12;
    }
`;
const v15 = `
    v0 &&= 8;
`;
const v16 = v15.replaceAll(8, v10);
for (let i19 = -3, i20 = 10;
    (() => {
        const v21 = 8 < i20;
        class C22 {
            constructor(a24) {
                const v26 = `
                    \`match${C22}getUint32${v16}o\`;
                `;
                const v28 = v26.split(a24);
                v28.reverse(a24, v28);
                v28.flatMap(eval);
            }
        }
        try { new C22(C22); } catch (e) {}
        return v21;
    })();
    i20--) {
}
gc();
