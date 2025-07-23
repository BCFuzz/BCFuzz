class C0 {
}
const v1 = new C0();
function f2() {
    Math.acos(v1);
}
Object.defineProperty(v1, "toString", { enumerable: true, value: f2 });
try { v1.toString(); } catch (e) {}
gc();
