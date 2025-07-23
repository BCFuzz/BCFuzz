const v1 = `
    class C2 {
        static #m(a4, a5, a6) {
        }
        #m(a8) {
        }
    }
`;
const v9 = v1.split();
try { v9.flatMap(eval); } catch (e) {}
gc();
