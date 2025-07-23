class C0 {
}
const v1 = C0.h;
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    Math.clz32(v1);
    const v10 = this.constructor;
    try { new v10(); } catch (e) {}
}
new F2(C0, v1, C0, F2);
gc();
