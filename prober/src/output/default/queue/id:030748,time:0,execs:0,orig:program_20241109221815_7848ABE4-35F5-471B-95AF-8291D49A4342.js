const v0 = /[(?:a+)?]/su;
const v1 = `
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
`;
const v4 = v1.split(v0);
v4[0] = v4;
class C5 {
    constructor(a7) {
        a7.reverse();
        const v10 = v4.reverse(eval, v4, a7, eval, v1);
        v10[2] = v10;
        v10.flatMap(eval);
    }
}
try { new C5(v4); } catch (e) {}
gc();
