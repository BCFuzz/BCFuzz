for (let v1 = 0; v1 < 25; v1++) {
    function f2() {
        return Date;
    }
    const v3 = f2();
    class C4 extends f2 {
        static #b = Date;
        static {
            this.#b = v3;
        }
    }
}
gc();
