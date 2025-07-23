function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(F0, F0); } catch (e) {}
}
new F0();
class C6 extends F0 {
}
const v7 = new C6();
const v8 = new C6();
const t10 = v8.constructor;
new t10(v8, v7, C6);
gc();
