class C1 extends Float64Array {
    constructor(a3, a4, a5, a6) {
        super();
        try { this.subarray(); } catch (e) {}
    }
}
new C1();
gc();
