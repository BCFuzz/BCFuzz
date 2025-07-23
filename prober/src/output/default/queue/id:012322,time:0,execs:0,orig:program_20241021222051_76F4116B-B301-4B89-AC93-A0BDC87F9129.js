class C0 {
    n(a2, a3) {
        try { this.n(a3); } catch (e) {}
        +a2;
    }
}
const v6 = new C0();
v6["n"]();
gc();
