class C1 {
    constructor(a3, a4, a5) {
        C1[1] = 1986387489;
        try { C1.apply(this, C1); } catch (e) {}
    }
}
new C1(1986387489, C1, 1986387489);
gc();
