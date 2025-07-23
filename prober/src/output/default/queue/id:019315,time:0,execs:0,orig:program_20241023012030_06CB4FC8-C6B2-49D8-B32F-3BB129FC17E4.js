function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let i5 = 0, i6 = 10; i6; i6--) {
}
function f12() {
    return f12;
}
class C13 extends f12 {
}
const v14 = new C13();
Object.defineProperty(v14, "second", { writable: true, configurable: true, enumerable: true, value: v2 });
class C17 extends Date {
}
const v18 = new C17();
try { v18.toLocaleTimeString("object", v14); } catch (e) {}
gc();
