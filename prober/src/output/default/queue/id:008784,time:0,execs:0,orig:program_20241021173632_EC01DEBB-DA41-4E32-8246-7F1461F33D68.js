class C0 {
}
const v1 = new C0();
class C4 extends Date {
}
const v5 = new C4();
Object.defineProperty(v5, 3, { value: v1 });
v5.length = 6;
try { v5.toLocaleTimeString(v5); } catch (e) {}
gc();
