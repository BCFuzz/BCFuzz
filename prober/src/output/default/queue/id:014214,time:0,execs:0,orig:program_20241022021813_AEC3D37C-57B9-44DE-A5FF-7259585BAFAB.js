const v1 = ReferenceError(ReferenceError);
class C2 extends ReferenceError {
}
const v3 = new C2();
const v4 = new C2();
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(a8, v3); } catch (e) {}
    a8.toLocaleString();
}
new F5(v1, v4);
gc();
