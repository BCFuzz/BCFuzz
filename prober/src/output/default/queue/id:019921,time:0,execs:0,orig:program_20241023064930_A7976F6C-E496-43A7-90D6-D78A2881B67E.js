function F3() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 10; v5++) {
        class C6 {
            constructor() {
                function f8(a9, a10) {
                }
                this.constructor = f8;
                this.g = this;
            }
            set g(a12) {
                function f13(a14, a15) {
                }
                this.constructor = f13;
                const v16 = a12?.__lookupGetter__;
                try { v16(a12, "return"); } catch (e) {}
            }
            #f;
        }
        C6.bind(this, this, this, C6);
        new C6();
    }
}
new F3();
new F3();
gc();
