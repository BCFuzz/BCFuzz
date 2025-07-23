function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4, a5) {
    return Int8Array(v2, a4);
}
v2.toString = f3;
for (let i10 = 0, i11 = 10; i11; i11--) {
}
function f17() {
    return f3;
}
class C18 extends f17 {
}
const v19 = new C18();
Object.defineProperty(v19, "second", { writable: true, configurable: true, enumerable: true, value: v2 });
class C22 extends Date {
}
const v23 = new C22();
try { v23.toLocaleTimeString("object", v19); } catch (e) {}
gc();
