const v0 = [];
class C1 {
    [v0];
}
new C1();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(a6, F3); } catch (e) {}
    a5.name;
}
new F3(C1);
new F3(C1);
gc();
