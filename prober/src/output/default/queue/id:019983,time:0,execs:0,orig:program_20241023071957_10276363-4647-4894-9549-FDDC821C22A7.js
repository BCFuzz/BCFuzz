class C1 extends Uint8Array {
}
const v2 = new C1();
const v3 = v2.reduce;
class C4 {
}
const v5 = new C4();
function f6(a7, a8, a9) {
    a8.caller;
    return v3;
}
try { f6(v5, v3); } catch (e) {}
gc();
