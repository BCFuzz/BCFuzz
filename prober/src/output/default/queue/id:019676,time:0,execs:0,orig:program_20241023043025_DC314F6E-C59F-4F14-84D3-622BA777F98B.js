class C1 {
}
const v2 = new C1();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
function f8(a9, a10) {
    return 9;
}
F3.toString = f8;
const v13 = this.constructor.freeze(v2);
try { v13.__defineSetter__(F3, F3); } catch (e) {}
gc();
