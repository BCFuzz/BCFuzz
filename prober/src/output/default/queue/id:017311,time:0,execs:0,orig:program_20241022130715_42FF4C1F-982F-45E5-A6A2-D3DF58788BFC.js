class C0 {
    #m(a2, a3) {
    }
    constructor(a5) {
        const v6 = this.constructor;
        try { new v6(v6, v6); } catch (e) {}
        this.#m();
    }
}
const v9 = new C0();
const t10 = v9.constructor;
new t10();
gc();
