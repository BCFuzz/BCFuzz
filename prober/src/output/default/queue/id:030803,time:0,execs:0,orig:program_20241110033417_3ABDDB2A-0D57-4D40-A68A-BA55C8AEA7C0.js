const v1 = 1 | 1;
const v2 = `
    class C3 {
        static prototype = v1;
    }
`;
class C4 {
}
try { C4.constructor(v2); } catch (e) {}
gc();
