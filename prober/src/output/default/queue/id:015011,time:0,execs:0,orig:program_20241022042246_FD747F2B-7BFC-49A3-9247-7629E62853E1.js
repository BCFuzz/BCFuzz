class C1 extends Date {
    constructor(a3, a4, a5) {
        super();
        for (let v6 = 0; v6 < 5; v6++) {
            super.setDate(v6);
        }
    }
}
new C1();
gc();
