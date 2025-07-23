class C0 {
    constructor(a2, a3) {
        const t2 = this.__proto__;
        t2.valueOf = a3;
    }
}
new C0(C0, C0);
class C7 {
    constructor(a9) {
        const v10 = this.constructor;
        try { new v10("d"); } catch (e) {}
        a9 in this;
    }
}
new C7();
gc();
