const o0 = {
};
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F1 {
    #toString(a7, a8) {
    }
    constructor(a10, a11, a12, a13) {
        try {
            o0.#toString();
        } catch(e15) {
        }
        super();
        try {
            a12.#toString();
        } catch(e17) {
        }
    }
}
new C5(F1, o0, C5, F1);
gc();
