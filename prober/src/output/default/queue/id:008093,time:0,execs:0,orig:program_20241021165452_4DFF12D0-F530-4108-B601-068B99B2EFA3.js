for (let i = 0; i < 5; i++) {
    class C1 {
        constructor(a3, a4, a5, a6) {
            ("undefined").__proto__.valueOf();
        }
    }
    const v9 = new C1();
    new C1(v9, "undefined", v9, v9);
}
gc();
