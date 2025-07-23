for (let v0 = 0; v0 < 5; v0++) {
    function f1() {
    }
    class C2 extends f1 {
        #o() {
        }
        valueOf() {
            this.#o();
        }
    }
    let v6 = new C2();
    v6 %= v6;
}
gc();
