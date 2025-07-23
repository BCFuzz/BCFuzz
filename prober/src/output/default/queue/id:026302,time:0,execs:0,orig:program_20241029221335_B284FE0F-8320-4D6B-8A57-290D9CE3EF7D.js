const v2 = `
    class C3 extends 65537n {
        static get h() {
            with (fiatInt52(C3)) {
            }
        }
    }
`;
const v7 = v2.split();
try { v7.flatMap(eval); } catch (e) {}
gc();
