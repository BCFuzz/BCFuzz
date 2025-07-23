class C1 extends Int32Array {
    constructor(a3, a4, a5) {
        super();
        try { this.slice(); } catch (e) {}
    }
}
new C1(C1, Int32Array, C1);
gc();
