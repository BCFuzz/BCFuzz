class C1 {
    #g;
    constructor(a3, a4, a5, a6) {
        try {
            undefined.#g;
            this.#g;
        } catch(e9) {
        }
    }
}
new C1(C1, undefined, undefined, C1);
gc();
