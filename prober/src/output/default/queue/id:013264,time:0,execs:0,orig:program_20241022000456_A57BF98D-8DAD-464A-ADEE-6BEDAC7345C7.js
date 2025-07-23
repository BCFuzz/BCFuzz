function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F1 {
}
const v6 = new C5();
for (let v7 = 0; v7 < 25; v7++) {
    class C8 {
        #m(a10, a11) {
        }
        constructor(a13) {
            class C14 {
                #c;
                static #g = 846796288;
                #h = v6;
            }
            this.#m();
        }
    }
    new C8();
}
gc();
