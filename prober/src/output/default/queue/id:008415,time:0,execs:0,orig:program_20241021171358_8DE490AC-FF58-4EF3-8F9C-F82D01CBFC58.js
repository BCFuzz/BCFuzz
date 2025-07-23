class C1 extends Date {
}
const v2 = new C1();
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
    v2.getYear();
}
const v8 = new F3();
const t10 = v8.constructor;
new t10();
gc();
