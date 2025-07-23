const v1 = `
    class C3 extends BigInt64Array {
        set b(a5) {
            class C6 {
                constructor() {
                }
                /*
                constructor(a9) {
                    /(?:a*)*OW*/miu;
                    async function f11(a12, a13) {
                        return a13;
                    }
                }
                */
            }
        }
    }
`;
const v14 = v1.split();
try { v14.flatMap(eval); } catch (e) {}
gc();
