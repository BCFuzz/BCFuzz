function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
JSON.stringify(v2.name, 5, 256);
gc();
