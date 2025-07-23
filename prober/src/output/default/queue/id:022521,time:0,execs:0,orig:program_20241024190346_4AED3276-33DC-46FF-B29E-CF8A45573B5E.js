const v0 = `
    function* f1(a2, a3, a4) {
        return a2;
    }
    /\u{12345}/myvis;
`;
const v7 = Error(v0);
class C8 {
}
try { C8.constructor(v7); } catch (e) {}
gc();
