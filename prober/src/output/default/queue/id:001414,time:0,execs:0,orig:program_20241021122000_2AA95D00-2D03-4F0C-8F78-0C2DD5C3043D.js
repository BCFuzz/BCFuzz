function f0() {
    const o1 = {
    };
    return o1;
}
class C2 {
}
Object.defineProperty(C2, "toString", { writable: true, value: f0 });
const v3 = new C2();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    try { a7.propertyIsEnumerable(a7); } catch (e) {}
}
new F4(v3, C2);
gc();
