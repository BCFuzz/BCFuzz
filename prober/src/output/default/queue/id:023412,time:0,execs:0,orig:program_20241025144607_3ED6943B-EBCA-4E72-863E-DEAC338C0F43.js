for (let i3 = 0, i4 = 10; i4; i4--) {
}
function f10() {
    return f10;
}
function f11() {
    return "dO75";
}
function f12(a13) {
    return f10;
}
Object.defineProperty(f10, "dayPeriod", { enumerable: true, get: f11, set: f12 });
class C14 extends f10 {
}
const v15 = new C14();
class C18 extends Date {
}
const v19 = new C18();
try { v19.toLocaleTimeString("object", v15); } catch (e) {}
gc();
