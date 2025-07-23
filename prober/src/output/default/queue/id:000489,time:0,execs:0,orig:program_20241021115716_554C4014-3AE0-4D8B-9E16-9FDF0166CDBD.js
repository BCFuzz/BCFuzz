function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F0 {
}
const v4 = new C3();
BigUint64Array.from(v4);
const v7 = new BigUint64Array(C3);
try { v7.sort(true); } catch (e) {}
gc();
