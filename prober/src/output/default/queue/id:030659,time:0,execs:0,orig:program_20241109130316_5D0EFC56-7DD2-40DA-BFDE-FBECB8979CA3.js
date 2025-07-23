const v1 = ([])[223];
const v2 = `
    class C3 {
        static constructor = v1;
    }
`;
class C4 {
}
try { C4.constructor(v2); } catch (e) {}
gc();
