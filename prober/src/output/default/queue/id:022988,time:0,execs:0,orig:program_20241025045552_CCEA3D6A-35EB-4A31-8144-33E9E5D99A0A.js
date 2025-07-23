class C4 extends Uint8Array {
    constructor(a6, a7, a8, a9) {
        super(a9);
        try { this.slice(); } catch (e) {}
    }
}
new C4(3401, 128, 3401, 127);
gc();
