const v0 = /[(?:a+)?]/su;
const v1 = `
    const o3 = {
        [11]: v1,
    };
`;
const v4 = v1.split(v0);
class C5 {
    constructor(a7) {
        v4.flatMap(eval);
    }
}
try { new C5(v4); } catch (e) {}
gc();
