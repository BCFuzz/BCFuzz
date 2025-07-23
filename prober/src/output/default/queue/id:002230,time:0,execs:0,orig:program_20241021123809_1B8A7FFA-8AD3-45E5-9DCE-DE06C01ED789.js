class C0 {
}
const v1 = new C0();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(F2, C0, C0, v1); } catch (e) {}
}
const v9 = new F2();
const v11 = gc();
try { v1(v9, gc, v11); } catch (e) {}
gc();
