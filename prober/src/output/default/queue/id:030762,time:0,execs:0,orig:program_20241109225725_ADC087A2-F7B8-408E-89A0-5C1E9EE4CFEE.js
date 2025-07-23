for (let i2 = 0, i3 = 65537; i3--;) {
}
const v9 = /[(?:a+)?]/su;
const v10 = `
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
    }
    F11();
    do {
    } while (65536 < 65536)
`;
const v16 = v10.split(v9);
class C17 {
    constructor(a19) {
        v16.reverse().flatMap(eval);
    }
}
try { new C17(v16); } catch (e) {}
gc();
