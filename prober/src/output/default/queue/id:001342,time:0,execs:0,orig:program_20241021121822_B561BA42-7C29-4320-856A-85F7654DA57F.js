function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C5 {
    static #g = v2;
    constructor(a7, a8, a9) {
        const v10 = super.c;
        try {
            a9.#g = v10;
        } catch(e11) {
        }
    }
}
const v12 = new C5();
new C5(v12, -1242922704, "g");
gc();
