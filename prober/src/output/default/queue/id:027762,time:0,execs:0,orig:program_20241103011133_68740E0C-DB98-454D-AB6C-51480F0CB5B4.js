class C1 {
    constructor(a3, a4, a5) {
        try { new a3(); } catch (e) {}
        for (let v7 = 0; v7 < 100; v7++) {
            Array(a3);
        }
        for (const v9 in a3) {
        }
    }
}
new C1(C1);
gc();
