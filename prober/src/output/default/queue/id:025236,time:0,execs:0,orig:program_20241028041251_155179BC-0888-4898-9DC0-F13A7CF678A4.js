class C3 extends Float32Array {
    constructor(a5, a6, a7) {
        super(a6);
        try { this.subarray(a6); } catch (e) {}
    }
}
new C3(-2, 540);
gc();
