for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = `
    class C13 extends 1073741823n {
        static get h() {
            class C15 {
                static #toString(a17, a18) {
                }
                #toString(a20, a21) {
                }
            }
        }
    }
`;
const v22 = v12.split();
try { v22.flatMap(eval); } catch (e) {}
gc();
