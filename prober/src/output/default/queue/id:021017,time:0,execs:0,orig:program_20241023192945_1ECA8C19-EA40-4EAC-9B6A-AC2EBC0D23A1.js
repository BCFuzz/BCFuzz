class C0 {
    constructor(a2, a3) {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
        }
        class C11 extends F7 {
            #toString(a13, a14) {
            }
            constructor(a16, a17, a18, a19) {
                super();
                this.#toString();
            }
        }
        new C11();
    }
}
new C0();
gc();
