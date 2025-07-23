function f0() {
}
class C1 extends f0 {
    [f0];
}
const v2 = new C1();
JSON["stringify"](v2);
gc();
