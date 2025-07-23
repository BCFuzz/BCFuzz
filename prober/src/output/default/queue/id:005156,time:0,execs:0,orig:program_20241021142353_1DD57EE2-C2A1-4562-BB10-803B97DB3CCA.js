class C0 {
}
const v1 = [C0];
let v2;
try { v2 = v1.map(v1); } catch (e) {}
const v3 = new C0();
Object.defineProperty(v3, "d", { configurable: true, set: v2 });
gc();
