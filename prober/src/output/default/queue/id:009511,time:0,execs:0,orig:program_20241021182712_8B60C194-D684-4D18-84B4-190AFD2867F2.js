function f0() {
}
class C2 extends f0 {
}
const v3 = new C2();
v3.length = "4096";
Uint16Array.from(v3);
gc();
