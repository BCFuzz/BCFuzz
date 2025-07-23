function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
}
class C8 extends F0 {
}
new C8();
function f11() {
    Reflect.construct(Int16Array, [arguments]);
    return arguments;
}
f11();
gc();
