class C0 {
}
const v1 = new C0();
const v3 = `
    class C4 {
        static #f = v1;
        static #m(a6, a7, a8) {
        }
        #m(a10) {
        }
    }
`;
const v11 = v3.split();
try { v11.flatMap(eval); } catch (e) {}
gc();
