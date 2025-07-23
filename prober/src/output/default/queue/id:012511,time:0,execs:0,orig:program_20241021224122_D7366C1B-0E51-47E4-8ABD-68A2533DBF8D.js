class C0 {
    valueOf(a2, a3) {
        Object.defineProperty(this, Symbol.toStringTag, { writable: true, value: a3 });
    }
}
const v6 = new C0();
function f7() {
    return f7;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(v6, Symbol.toStringTag, { get: f7, set: f8 });
try { v6.valueOf(f7, Symbol); } catch (e) {}
gc();
