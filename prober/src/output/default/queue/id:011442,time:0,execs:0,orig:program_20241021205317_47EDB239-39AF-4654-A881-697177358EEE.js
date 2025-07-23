for (let v0 = 0; v0 < 100; v0++) {
    class C1 {
        #m(a3, a4) {
        }
        constructor(a6) {
            this.#m();
        }
    }
    new C1();
}
gc();
