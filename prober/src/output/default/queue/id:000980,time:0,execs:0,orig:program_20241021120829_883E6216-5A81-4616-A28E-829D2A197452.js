function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    #toString(a8, a9) {
    }
    constructor(a11, a12, a13, a14) {
        super();
        try {
            a13.#toString();
        } catch(e16) {
        }
    }
}
new C6();
new C6(C6, v5, v4);
gc();
