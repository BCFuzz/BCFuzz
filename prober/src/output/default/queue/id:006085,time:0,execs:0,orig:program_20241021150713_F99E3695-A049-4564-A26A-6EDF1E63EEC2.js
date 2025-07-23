class C1 {
    constructor(a3) {
        try { a3.toString(a3); } catch (e) {}
    }
}
new C1(512694.55493125436);
gc();
