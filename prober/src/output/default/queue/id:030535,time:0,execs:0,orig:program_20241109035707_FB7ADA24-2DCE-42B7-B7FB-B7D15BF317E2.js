const v0 = /[(?:a+)?]/su;
const v1 = `
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        /\u{12345}/myvis;
    }
    F3();
    while (0 < 9) {
    }
`;
const v9 = v1.split(v0);
class C10 {
    constructor(a12) {
        v9.reverse().flatMap(eval);
    }
}
try { new C10(v9); } catch (e) {}
gc();
