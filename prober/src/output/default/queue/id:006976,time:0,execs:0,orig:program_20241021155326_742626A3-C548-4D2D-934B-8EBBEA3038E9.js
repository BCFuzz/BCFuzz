class C0 {
    #toString() {
    }
}
const v2 = new C0();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(a5); } catch (e) {}
    const t9 = a5.constructor;
    new t9();
}
new F3(v2);
gc();
