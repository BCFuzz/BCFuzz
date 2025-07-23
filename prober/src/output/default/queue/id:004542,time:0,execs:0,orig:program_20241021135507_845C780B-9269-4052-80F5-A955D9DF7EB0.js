function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(this, this); } catch (e) {}
    a8.h = a8;
    this.b = a8;
}
new F5(F5, v3);
new F5(v2, v4);
new F5(v3, v3);
function f14(a15, a16) {
    return a15;
}
const v17 = f14(f14);
([173743.1328928608,9.802026585503434e+307]).sort(f14);
const v21 = new Map();
v21.set();
v21.forEach(v17);
gc();
