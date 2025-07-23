const v0 = `
    async function f1(a2, a3) {
        return v0;
    }
`;
const v5 = Error(v0);
class C6 {
}
try { C6.constructor(v5); } catch (e) {}
gc();
