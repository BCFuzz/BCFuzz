const v0 = /[(?:a+)?]/su;
const v1 = `
    if (0) {
    }
`;
const v3 = v1.split(v0);
class C4 {
    constructor(a6) {
        const v8 = `
            \`match${C4}getUint32${v3}o\`;
        `;
        v8.split(a6).reverse().flatMap(eval);
    }
}
try { new C4(C4); } catch (e) {}
gc();
