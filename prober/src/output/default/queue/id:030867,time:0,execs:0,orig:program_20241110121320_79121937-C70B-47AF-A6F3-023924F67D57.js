const v1 = `
    class C3 extends BigInt64Array {
        set constructor(a5) {
        }
    }
`;
const v6 = v1.split();
try { v6.flatMap(eval); } catch (e) {}
gc();
