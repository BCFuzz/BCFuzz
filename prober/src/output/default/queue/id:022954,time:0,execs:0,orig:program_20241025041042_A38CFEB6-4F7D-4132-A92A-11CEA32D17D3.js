const v1 = Symbol.toPrimitive;
class C2 {
}
const v3 = new C2();
function f4() {
    return v1;
}
Object.defineProperty(v3, "length", { get: f4 });
const v6 = new Int8Array();
try { v6.set(v3); } catch (e) {}
gc();
