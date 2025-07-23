const v0 = /a(?!b)/su;
const v1 = `
    const o4 = {
        set b(a3) {
        },
    };
`;
const v5 = v1.split(v0);
v5.pop();
class C7 {
    constructor(a9) {
        const v11 = `
            \`match${C7}getUint32${v5}o\`;
        `;
        const v13 = v11.split(a9);
        v13.reverse(v5, v13, v13, this, v13).flatMap(eval);
    }
}
try { new C7(C7); } catch (e) {}
gc();
