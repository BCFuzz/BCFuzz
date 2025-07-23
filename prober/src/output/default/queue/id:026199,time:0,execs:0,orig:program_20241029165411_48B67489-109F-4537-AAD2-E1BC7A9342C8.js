class C1 extends Int16Array {
    constructor(a3, a4, a5, a6) {
        super();
        try { this.slice(); } catch (e) {}
    }
}
new C1(Int16Array, C1, C1, C1);
gc();
