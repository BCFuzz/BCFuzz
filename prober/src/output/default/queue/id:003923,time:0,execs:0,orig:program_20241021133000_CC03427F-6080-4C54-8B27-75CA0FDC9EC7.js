class C0 {
    static p(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            throw v4;
        }
    }
}
try { C0.p(); } catch (e) {}
gc();
