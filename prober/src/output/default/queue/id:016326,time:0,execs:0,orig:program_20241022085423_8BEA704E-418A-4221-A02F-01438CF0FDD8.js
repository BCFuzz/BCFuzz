function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
class C4 {
    static #g = v3;
    constructor(a6, a7, a8) {
        const v9 = super.c;
        for (let v10 = 0; v10 < 25; v10++) {
        }
        try {
            a8.#g = v9;
        } catch(e11) {
        }
    }
}
new C4(C4, C4, null);
const v13 = new C4();
const t18 = v13.constructor;
new t18(C4, null, C4);
const t20 = v13.constructor;
new t20(v3, v3, v3);
gc();
