function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F4();
class C7 {
    static #g = v6;
    constructor(a9, a10, a11) {
        const v12 = super.c;
        for (let v13 = 0; v13 < 25; v13++) {
        }
        try {
            a11.#g = v12;
        } catch(e14) {
        }
    }
}
new C7();
const v16 = new C7();
const t18 = v16.constructor;
const v18 = new t18(C7, null, C7);
const t20 = v18.constructor;
new t20(Float64Array, "-2146", "growable");
gc();
