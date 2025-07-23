class C1 extends Uint8ClampedArray {
    constructor(a3, a4, a5) {
        super();
        try { this.slice(); } catch (e) {}
    }
}
new C1();
gc();
