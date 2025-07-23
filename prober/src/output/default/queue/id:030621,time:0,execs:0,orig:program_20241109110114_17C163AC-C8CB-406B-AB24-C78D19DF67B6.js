const v0 = /[(?:a+)?]/su;
const v1 = `
    const o3 = {
        get b() {
            return v0;
        },
    };
`;
const v4 = v1.split(v0);
class C5 {
    constructor(a7) {
        const v9 = `
            \`match${C5}getUint32${v4}o\`;
        `;
        v9.split(a7).reverse(a7).flatMap(eval);
    }
}
try { new C5(C5); } catch (e) {}
gc();
