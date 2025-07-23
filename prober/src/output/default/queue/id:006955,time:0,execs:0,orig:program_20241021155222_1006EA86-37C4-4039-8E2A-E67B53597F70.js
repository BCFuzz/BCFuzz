for (let v0 = 0; v0 < 5; v0++) {
    class C1 {
        constructor() {
            this.g = this;
            this.g = this;
        }
        set g(a4) {
        }
    }
    new C1();
}
gc();
