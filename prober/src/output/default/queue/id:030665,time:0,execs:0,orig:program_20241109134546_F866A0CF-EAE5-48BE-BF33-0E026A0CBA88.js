const v0 = /a(?!b)/su;
const v1 = `
    /\u{12345}/isu;
    const o5 = {
        set b(a4) {
        },
    };
`;
const v6 = v1.split(v0);
class C7 {
    constructor(a9) {
        const v11 = `
            \`match${C7}getUint32${v6}o\`;
        `;
        v11.split(a9).reverse().flatMap(eval);
    }
}
try { new C7(C7); } catch (e) {}
gc();
