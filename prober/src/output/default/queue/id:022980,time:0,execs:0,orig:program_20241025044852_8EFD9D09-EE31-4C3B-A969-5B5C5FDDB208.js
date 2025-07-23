class C1 extends Uint8Array {
    constructor(a3, a4, a5, a6) {
        super();
        try { this.subarray(); } catch (e) {}
    }
}
new C1(Uint8Array, Uint8Array, C1, C1);
gc();
