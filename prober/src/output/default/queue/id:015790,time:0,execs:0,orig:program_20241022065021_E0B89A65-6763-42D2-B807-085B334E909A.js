class C1 {
    #toString(a3) {
    }
    constructor(a5) {
        const v6 = this.constructor;
        try { new v6(this); } catch (e) {}
        try {
            a5.#toString();
        } catch(e9) {
            Error();
            function f12() {
                return this;
            }
        }
    }
}
new C1();
const v14 = new C1(C1);
const v15 = v14.constructor;
new v15(this, v15);
gc();
