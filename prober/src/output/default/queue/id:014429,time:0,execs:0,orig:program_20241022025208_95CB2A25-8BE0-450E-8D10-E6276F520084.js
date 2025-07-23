for (let v0 = 0; v0 < 32; v0++) {
    class C1 {
        constructor(a3) {
            this[2032864891] ^= this;
        }
        toString(a5, a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                class C9 {
                }
                const v10 = new C9();
                delete v10[Symbol()];
            }
        }
    }
    new C1(v0);
    new C1();
    new C1(C1);
}
gc();
