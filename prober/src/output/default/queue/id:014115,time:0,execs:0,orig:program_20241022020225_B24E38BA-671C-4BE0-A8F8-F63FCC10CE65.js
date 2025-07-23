function F1() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 10; v3++) {
        class C4 {
            constructor() {
                this.g = this;
            }
            set g(a7) {
                try { this.constructor(); } catch (e) {}
                const v9 = a7?.__lookupGetter__;
                try { v9(); } catch (e) {}
            }
            #f;
        }
        C4.bind(this, this, this, C4);
        new C4();
    }
}
new F1();
new F1();
gc();
