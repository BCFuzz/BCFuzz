const v0 = /[(?:a+)?]/su;
const v1 = `
    while (0 < 9) {
    }
`;
const v5 = v1.split(v0);
class C6 {
    constructor(a8) {
        const v10 = `
            \`match${C6}getUint32${v5}o\`;
        `;
        v10.split(a8).reverse().flatMap(eval);
    }
}
try { new C6(C6); } catch (e) {}
gc();
