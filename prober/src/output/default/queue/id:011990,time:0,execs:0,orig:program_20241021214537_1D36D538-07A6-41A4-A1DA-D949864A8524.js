for (let i = 0; i < 25; i++) {
    class C3 extends Map {
        #d = 36457n;
        constructor(a5) {
            for (let v6 = 0; v6 < 100; v6++) {
            }
            super();
            this.#d = -9223372036854775808n;
        }
    }
    const v7 = new C3();
    const v8 = new C3(v7);
    new C3(v8);
}
gc();
