for (let v0 = 0; v0 < 25; v0++) {
    class C1 {
        #m(a3, a4) {
        }
        constructor(a6) {
            this.#m();
            class C8 {
                static {
                    for (let v10 = 0; v10 < 250; v10++) {
                    }
                }
            }
        }
    }
    new C1();
}
gc();
