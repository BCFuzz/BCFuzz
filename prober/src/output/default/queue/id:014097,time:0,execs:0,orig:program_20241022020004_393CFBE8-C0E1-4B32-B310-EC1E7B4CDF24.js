class C1 {
    #g;
    constructor(a3, a4, a5, a6) {
        try {
            for (let v7 = 0; v7 < 5000; v7++) {
            }
            C1.#g %= 6;
        } catch(e8) {
        }
    }
}
new C1();
gc();
