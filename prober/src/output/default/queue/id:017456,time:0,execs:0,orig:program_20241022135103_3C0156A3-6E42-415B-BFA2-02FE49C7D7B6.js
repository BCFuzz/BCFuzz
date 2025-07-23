for (let v0 = 0; v0 < 5; v0++) {
    class C1 {
        g;
        constructor(a3, a4) {
            delete this.g;
        }
    }
    for (let v6 = 0; v6 < 50; v6++) {
        class C7 extends C1 {
        }
        new C7();
    }
}
gc();
