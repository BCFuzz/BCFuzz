const v1 = `
    class C3 extends BigInt64Array {
        set b(a5) {
            super();
            /\u{12345}/myvis;
        }
    }
`;
const v7 = v1.split();
try { v7.flatMap(eval); } catch (e) {}
gc();
