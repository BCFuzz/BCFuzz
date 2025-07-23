function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const v3 = new C2();
with (v3) {
    new BigUint64Array();
    new Float64Array();
    new Uint32Array();
}
gc();
