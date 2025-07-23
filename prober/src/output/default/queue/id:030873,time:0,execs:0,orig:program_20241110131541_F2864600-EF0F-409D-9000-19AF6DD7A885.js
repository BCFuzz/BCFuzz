const v1 = `
    class C3 extends BigInt64Array {
        set constructor(a5) {
        }
    }
    const o10 = {
        toString(a7, a8) {
            /\u{12345}/myvis;
            return a8;
        },
    };
`;
const v11 = v1.split();
try { v11.flatMap(eval); } catch (e) {}
gc();
