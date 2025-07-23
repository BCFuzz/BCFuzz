const v0 = /a(?!b)/su;
const v1 = `
    const o4 = {
        set b(a3) {
        },
    };
`;
const v5 = v1.split(v0);
class C6 {
    constructor(a8) {
        const v10 = `
            \`match${C6}getUint32${v5}o\`;
        `;
        const v12 = v10.split(a8);
        v12.reverse(v12).flatMap(eval);
    }
}
try { new C6(C6); } catch (e) {}
gc();
