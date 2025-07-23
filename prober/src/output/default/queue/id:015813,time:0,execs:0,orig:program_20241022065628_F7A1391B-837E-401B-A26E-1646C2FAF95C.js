const v0 = [13,129,127,-256,9223372036854775807,7];
class C2 extends ReferenceError {
}
const v3 = new C2();
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v0.__proto__ = v3;
    const v9 = this.constructor;
    try { new v9(v0, v9, this, C2, a6); } catch (e) {}
}
new F4(v3, F4, v0);
gc();
