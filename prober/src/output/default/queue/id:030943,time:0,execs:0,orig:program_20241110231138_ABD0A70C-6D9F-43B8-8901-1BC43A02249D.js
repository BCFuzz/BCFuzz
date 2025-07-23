for (let i2 = 6, i3 = 10; i2 < i3; --i3) {
}
const v10 = `
    class C12 extends BigInt64Array {
        set b(a14) {
            class C15 {
                constructor() {
                }
                /*
                constructor(a18) {
                    class C19 {
                        constructor() {
                        }
                        /*
                        constructor(a22) {
                        }
                        */
                    }
                }
                */
            }
        }
    }
`;
class C23 {
}
try { C23.constructor(v10); } catch (e) {}
gc();
