const v0 = `
    let v1 = 256n;
    class C2 {
        constructor(a4) {
            v1 += a4;
        }
    }
`;
const v6 = Error(v0);
class C7 {
}
try { C7.constructor(v6); } catch (e) {}
gc();
