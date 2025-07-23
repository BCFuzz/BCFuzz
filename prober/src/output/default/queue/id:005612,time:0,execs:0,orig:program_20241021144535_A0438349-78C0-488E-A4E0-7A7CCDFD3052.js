for (let v0 = 0; v0 < 100; v0++) {
    class C1 {
        static #b;
        constructor(a3, a4) {
            try {
                this.#b ^= v0;
            } catch(e5) {
            }
        }
    }
    new C1(v0, v0);
}
gc();
