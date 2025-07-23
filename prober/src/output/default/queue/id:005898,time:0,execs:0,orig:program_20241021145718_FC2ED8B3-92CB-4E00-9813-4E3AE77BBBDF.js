function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 extends F0 {
    #toString(a6, a7) {
    }
    constructor(a9, a10, a11, a12) {
        super();
        try {
            a11.#toString();
        } catch(e14) {
            eval("");
        }
    }
}
new C4(F0, C4, F0, C4);
gc();
