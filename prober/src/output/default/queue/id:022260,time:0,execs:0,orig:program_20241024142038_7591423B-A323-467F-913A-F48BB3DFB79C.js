class C1 extends ArrayBuffer {
    constructor(a3, a4, a5) {
        super();
        try { this.slice(); } catch (e) {}
    }
}
new C1();
gc();
