class C0 {
    constructor() {
        for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
            function f12() {
                return this;
            }
            f12.bind(i5, i4, i4, f12);
            for (let v14 = 0; v14 < 25; v14++) {
            }
        }
    }
}
new C0();
gc();
