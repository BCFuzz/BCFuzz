class C0 {
    constructor(a2, a3) {
        const v4 = this.constructor;
        try { new v4(); } catch (e) {}
        const t4 = this.__proto__;
        t4.valueOf = a3;
    }
}
new C0(C0, C0);
function F8() {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(); } catch (e) {}
}
new F8();
gc();
