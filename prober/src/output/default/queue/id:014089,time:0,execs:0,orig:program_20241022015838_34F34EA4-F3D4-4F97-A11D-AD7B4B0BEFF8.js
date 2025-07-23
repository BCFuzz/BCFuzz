class C0 {
    constructor(a2, a3) {
        const v4 = this.__proto__;
        const v5 = v4?.constructor;
        try { new v5(); } catch (e) {}
        v4.valueOf = a3;
    }
}
new C0(C0, C0);
new C0();
gc();
