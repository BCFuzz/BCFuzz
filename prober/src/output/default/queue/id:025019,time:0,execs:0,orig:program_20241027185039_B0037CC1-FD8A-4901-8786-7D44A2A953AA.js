class C2 extends Uint16Array {
    constructor(a4, a5, a6) {
        super(a5);
        try { this.subarray(a5); } catch (e) {}
    }
}
new C2(75, 75);
gc();
