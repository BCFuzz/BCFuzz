function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = /[(?:a+)?]/su;
const v4 = `
    const o6 = {
        [11]: v2,
    };
`;
const v7 = v4.split(v3);
class C8 {
    constructor(a10) {
        const v12 = `
            \`match${C8}getUint32${v7}o\`;
        `;
        const v14 = v12.split(a10);
        v14.reverse(v14, C8).flatMap(eval);
    }
}
try { new C8(C8); } catch (e) {}
gc();
