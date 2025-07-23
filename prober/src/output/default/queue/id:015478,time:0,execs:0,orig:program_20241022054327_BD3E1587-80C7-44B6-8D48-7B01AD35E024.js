class C2 {
    #toString(a4) {
    }
    constructor(a6) {
        const v7 = this.constructor;
        try { new v7(this); } catch (e) {}
        try {
            a6.#toString();
        } catch(e10) {
        }
    }
}
new C2(15);
const v12 = new C2();
const t14 = v12.constructor;
const v14 = new t14();
const t16 = v14.constructor;
new t16(this);
gc();
