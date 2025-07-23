const v0 = `
    async function f1(a2, a3) {
        return f1;
    }
    /\u{12345}/myvis;
`;
const v6 = Error(v0);
class C7 {
}
try { C7.constructor(v6); } catch (e) {}
gc();
