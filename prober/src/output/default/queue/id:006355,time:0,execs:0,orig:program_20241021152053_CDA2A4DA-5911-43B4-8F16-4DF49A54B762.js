class C0 {
}
const v1 = new C0();
function f2() {
    return v1;
}
const v4 = ("parse").__proto__;
Object.defineProperty(v4, Symbol.toPrimitive, { configurable: true, value: f2 });
try { v4.startsWith(); } catch (e) {}
gc();
