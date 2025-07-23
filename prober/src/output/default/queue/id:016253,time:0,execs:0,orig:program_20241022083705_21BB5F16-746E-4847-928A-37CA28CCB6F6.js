const v2 = new Int32Array(1024);
class C3 extends Int32Array {
    constructor(a5, a6) {
        super();
        for (const v7 of v2) {
            try { this.keys(); } catch (e) {}
        }
    }
}
new C3();
new C3();
gc();
