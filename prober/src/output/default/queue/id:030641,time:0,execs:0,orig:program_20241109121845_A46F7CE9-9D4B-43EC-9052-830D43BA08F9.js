const v1 = ([])[0];
const v2 = `
    class C3 {
        static constructor = v1;
    }
    /\u{12345}/myvis;
`;
class C5 {
}
try { C5.constructor(v2); } catch (e) {}
gc();
