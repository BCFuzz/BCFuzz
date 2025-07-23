function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const v3 = new C2();
const v4 = [-2.2250738585072014e-308,NaN,1e-15,-2.220446049250313e-16,-4.904972732518004];
const v5 = +v3;
try { BigInt.apply(v5, v4); } catch (e) {}
gc();
