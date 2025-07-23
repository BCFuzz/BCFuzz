const v0 = /[(?:a+)?]/su;
const v1 = `
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        /\u{12345}/myvis;
    }
`;
const v5 = v1.split(v0);
v5[0] = v5;
class C6 {
    constructor(a8) {
        a8.reverse(a8, a8, v1, a8);
        const v11 = v5.reverse();
        v11[2] = v11;
        v11.flatMap(eval);
    }
}
try { new C6(v5); } catch (e) {}
gc();
