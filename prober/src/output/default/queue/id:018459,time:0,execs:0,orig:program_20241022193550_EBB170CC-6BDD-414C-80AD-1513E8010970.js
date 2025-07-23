class C1 {
    #n(a3, a4, a5) {
    }
    constructor(a7, a8, a9, a10) {
        const v11 = this.constructor;
        try { new v11(this, this, a7); } catch (e) {}
        try {
            a9.#n();
        } catch(e14) {
        }
    }
}
const v15 = new C1();
const v16 = v15.constructor;
const v17 = new v16(v15, C1, v16);
const v18 = new C1(11n, 11n, 11n);
const v19 = v18.constructor;
v19.prototype = v19;
new v19(v16, v19, v17, C1);
gc();
