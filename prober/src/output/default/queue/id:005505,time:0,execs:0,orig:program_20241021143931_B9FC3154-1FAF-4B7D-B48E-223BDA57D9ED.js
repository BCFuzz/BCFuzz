for (let i = 0; i < 250; i++) {
    class C1 {
        b;
        static #d = -9007199254740992;
    }
    new C1();
}
gc();
