class C0 {
}
const o1 = {
};
const o2 = {
};
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a5 instanceof C0;
    const v8 = this.constructor;
    try { new v8(F3); } catch (e) {}
}
new F3(o1);
new F3(o2);
gc();
