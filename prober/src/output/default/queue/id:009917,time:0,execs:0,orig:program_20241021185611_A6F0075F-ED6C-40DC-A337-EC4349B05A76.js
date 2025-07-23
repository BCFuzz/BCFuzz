class C0 {
    constructor(a2, a3) {
        try { this.hasOwnProperty(this); } catch (e) {}
    }
}
for (let v5 = 0; v5 < 100; v5++) {
    class C6 extends C0 {
    }
    new C6();
}
gc();
