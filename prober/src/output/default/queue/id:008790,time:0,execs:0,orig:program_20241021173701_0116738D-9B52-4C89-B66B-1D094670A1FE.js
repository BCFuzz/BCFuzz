class C0 {
}
const v1 = new C0();
function f2() {
    return C0;
}
v1[Symbol.toPrimitive] = f2;
class C7 extends Date {
}
const v8 = new C7();
Object.defineProperty(v8, 3, { value: v1 });
v8.length = 6;
try { v8.toLocaleTimeString(v8); } catch (e) {}
gc();
