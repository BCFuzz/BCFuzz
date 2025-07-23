class C1 {
    static n(a3, a4) {
        super["prototype"] = "prototype";
    }
}
try { C1.n("prototype", C1, "prototype"); } catch (e) {}
gc();
