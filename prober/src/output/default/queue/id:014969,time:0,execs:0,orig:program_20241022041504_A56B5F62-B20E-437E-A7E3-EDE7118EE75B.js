ReferenceError.stackTraceLimit = -1932;
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { v5(-1932, -1932, a4, a4); } catch (e) {}
}
class C7 extends F2 {
}
new C7();
gc();
