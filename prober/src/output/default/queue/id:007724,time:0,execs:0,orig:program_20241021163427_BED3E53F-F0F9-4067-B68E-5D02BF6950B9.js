class C0 {
}
const v1 = new C0();
class C2 {
    constructor(a4) {
        const v5 = this.constructor;
        try { new v5(v1); } catch (e) {}
        const v8 = new Date();
        v8.setSeconds(a4);
    }
}
new C2(C2);
gc();
