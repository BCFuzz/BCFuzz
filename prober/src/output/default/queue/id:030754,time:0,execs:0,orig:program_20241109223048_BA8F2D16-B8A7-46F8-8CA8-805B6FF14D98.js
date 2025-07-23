for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i13 = 0, i14 = 10; i14--, i13 < i14;) {
}
const v21 = `
    for (let i24 = 0, i25 = 10; i24 < i25;) {
    }
`;
for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
    for (let i43 = 0, i44 = 10; i43 < i44; i44--) {
    }
    for (let [i63, i64] = (() => {
            for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
            }
            return [0, 10];
        })();
        i63 < i64;
        i64--) {
    }
    for (let i73 = 0, i74 = 10; i73 < i74; i74--) {
    }
}
const v82 = `
    let {...v83} = "function";
`;
const v84 = v82.replaceAll(8, v21);
class C85 {
    constructor(a87) {
        const v89 = `
            \`match${C85}getUint32${v84}o\`;
        `;
        const v91 = v89.split(a87);
        v91.reverse(v89, 8, v91, v91, 8);
        v91.flatMap(eval);
    }
}
for (let i97 = 0, i98 = 10 + 10; i98--, i98;) {
}
try { new C85(C85); } catch (e) {}
gc();
