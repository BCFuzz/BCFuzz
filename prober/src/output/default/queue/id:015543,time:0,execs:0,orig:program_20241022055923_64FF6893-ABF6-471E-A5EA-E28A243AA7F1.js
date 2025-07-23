class C0 {
    #m(a2, a3) {
        const v4 = this.constructor;
        try { new v4(); } catch (e) {}
    }
    constructor(a7) {
        this.#m();
    }
}
new C0();
gc();
