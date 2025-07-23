for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        class C3 {
            #e;
            constructor() {
                this.#e = this;
            }
            static #c;
        }
        new C3();
        new C3();
    }
    new F1();
}
gc();
