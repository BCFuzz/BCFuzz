const v0 = [];
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a3, 13, { writable: true, configurable: true, value: this });
}
new F1(v0);
class C7 {
}
class C8 extends C7 {
}
const v9 = new C8();
const v10 = v9.constructor;
try { v10.apply(v0, v0); } catch (e) {}
gc();
