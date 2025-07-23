class C0 {
}
const o1 = {
};
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a4 instanceof C0;
    const v7 = this.constructor;
    try { new v7(F2); } catch (e) {}
}
new F2();
new F2(o1);
gc();
