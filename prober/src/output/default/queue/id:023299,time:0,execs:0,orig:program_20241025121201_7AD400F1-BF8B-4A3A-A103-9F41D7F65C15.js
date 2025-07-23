const v0 = `
    function* f1(a2, a3, a4) {
        return v0;
    }
`;
const v6 = Error(v0);
class C7 {
}
try { C7.constructor(v6); } catch (e) {}
gc();
