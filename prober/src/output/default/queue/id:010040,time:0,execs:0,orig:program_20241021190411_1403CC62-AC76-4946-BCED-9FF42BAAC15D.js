const v1 = new Set();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(this); } catch (e) {}
    a4.c = a4;
    this.h = a4;
    this.h = a4;
}
const v7 = new F2(Set);
new F2(v1);
new F2(v7);
gc();
