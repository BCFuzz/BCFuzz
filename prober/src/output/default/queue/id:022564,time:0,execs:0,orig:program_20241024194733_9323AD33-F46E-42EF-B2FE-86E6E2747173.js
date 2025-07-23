class C1 extends Float32Array {
    constructor(a3, a4, a5) {
        super();
        try { this.slice(a4, a4); } catch (e) {}
    }
}
new C1();
gc();
