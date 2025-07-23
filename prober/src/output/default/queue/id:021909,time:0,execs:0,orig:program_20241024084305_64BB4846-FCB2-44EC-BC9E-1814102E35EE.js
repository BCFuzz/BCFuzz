const v0 = `
    class C2 extends Date {
    }
    /\u{12345}/myvis;
`;
const v5 = Error(v0);
class C6 {
}
try { C6.constructor(v5); } catch (e) {}
gc();
