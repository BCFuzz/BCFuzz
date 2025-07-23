for (let v0 = 0; v0 < 50; v0++) {
    class C1 {
        #m(a3, a4) {
        }
        constructor(a6) {
            this.#m();
        }
    }
    const v8 = new C1(C1);
    const t9 = v8.constructor;
    new t9(C1, v8, C1);
}
gc();
