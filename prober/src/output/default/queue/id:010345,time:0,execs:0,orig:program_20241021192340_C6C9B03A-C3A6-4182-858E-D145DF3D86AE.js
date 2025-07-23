class C0 {
    constructor(a2, a3) {
        const v4 = this.constructor;
        try { new v4(); } catch (e) {}
        return arguments;
    }
}
new C0();
gc();
