function f0() {
    return f0;
}
const o1 = {
    __proto__: f0,
};
class C2 {
}
const v3 = new C2();
try { v3.__defineSetter__(o1, f0); } catch (e) {}
gc();
