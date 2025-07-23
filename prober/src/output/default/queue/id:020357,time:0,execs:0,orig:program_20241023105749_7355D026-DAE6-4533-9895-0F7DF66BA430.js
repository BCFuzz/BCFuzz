for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9() {
    return f9;
}
class C10 extends f9 {
}
const v11 = new C10();
function f12() {
    return f9;
}
function f13(a14) {
    return f12;
}
Object.defineProperty(v11, "dateStyle", { configurable: true, enumerable: true, get: f12, set: f13 });
class C17 extends Date {
}
const v18 = new C17();
try { v18.toLocaleTimeString("object", v11); } catch (e) {}
gc();
