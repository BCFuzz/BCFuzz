const v1 = `
    class C2 {
        static #m(a4, a5, a6) {
        }
        #m(a8) {
        }
    }
    /\u{12345}/myvis;
`;
const v10 = v1.split();
try { v10.flatMap(eval); } catch (e) {}
gc();
