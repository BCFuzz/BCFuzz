class C0 {
}
const v1 = new C0();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = this.constructor.freeze(v1);
try { v9.__defineSetter__(F2, F2); } catch (e) {}
gc();
