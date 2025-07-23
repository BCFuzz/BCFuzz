class C0 {
}
const v1 = new C0();
function f2() {
    return f2();
}
Object.defineProperty(v1, Symbol.toStringTag, { get: f2 });
try { this.parseFloat(v1); } catch (e) {}
gc();
