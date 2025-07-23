function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    const o5 = {
        [F0]: a3,
    };
    return o5;
}
class C6 extends f2 {
}
const v7 = new C6();
v7.__lookupSetter__(F0);
gc();
