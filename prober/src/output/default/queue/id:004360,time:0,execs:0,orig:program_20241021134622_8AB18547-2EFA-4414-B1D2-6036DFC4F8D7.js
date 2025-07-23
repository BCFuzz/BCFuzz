class C0 {
    constructor(a2, a3, a4, a5) {
        const v6 = this.constructor;
        try { new v6(v6, this); } catch (e) {}
        delete Date["growable"];
    }
}
new C0();
gc();
