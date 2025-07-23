for (let i = 0; i < 10; i++) {
    class C0 {
        constructor() {
            this.g = this;
            const v2 = this.__lookupGetter__;
            try { v2.call(this, v2, v2, C0); } catch (e) {}
        }
        set g(a5) {
        }
        #f;
    }
    new C0();
    new C0();
}
gc();
