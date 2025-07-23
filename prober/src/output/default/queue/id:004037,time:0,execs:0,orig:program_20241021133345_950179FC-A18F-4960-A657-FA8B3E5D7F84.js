function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 10; v2++) {
        class C3 {
            constructor() {
                this.g = this;
            }
            set g(a6) {
            }
            #f;
        }
        new C3();
    }
}
new F0();
new F0();
gc();
