const v1 = ([])[0];
const v2 = `
    class C3 {
        static prototype = v1;
    }
    /\u{12345}/myvis;
`;
class C5 {
}
try { C5.constructor(v2); } catch (e) {}
gc();
