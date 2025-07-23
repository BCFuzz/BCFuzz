function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
const v3 = f0();
const v4 = f0();
class C5 {
}
const v6 = new C5();
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this?.constructor;
    try { new v12(v3, a11, this); } catch (e) {}
    a10.arguments = a10;
}
const v14 = new F7(v4, F7);
new F7(v4, f0, v2);
new F7(v6, v14);
gc();
