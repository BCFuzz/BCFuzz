const v0 = /[(?:a+)?]/su;
const v1 = `
    if (0) {
    }
`;
const v3 = v1.split(v0);
class C4 {
    constructor(a6) {
        v3.reverse(eval).flatMap(eval);
    }
}
try { new C4(C4); } catch (e) {}
gc();
