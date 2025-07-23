for (let v1 = 0; v1 < 10; v1++) {
    function f2() {
    }
    const v3 = f2();
    class C4 extends f2 {
        static #b = Date;
        static {
            this.prototype.constructor;
            try {
                v3.#b = v3;
            } catch(e8) {
            }
        }
    }
}
gc();
